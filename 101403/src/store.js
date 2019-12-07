import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
     //普段はメニューバー閉じてる状態
    drawer: false,
    addresses: []
  },
  mutations: {
    //ログインユーザーの取得時に記載
    setLoginUser(state, user) {
    state.login_user = user
    },

    deleteLoginUser (state){
      state.login_user = null
    },
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addAddress (state, {id, address}) {
      //連絡先の編集実装で追記。コレで、個別のidも保存されるようになった
      address.id = id
      state.addresses.push(address)
    },
    updateAddress (state, {id, address}) {
      //対象のアドレスオブジェクトが存在するindexを調べる
      const index = state.addressed.findIndex(address => address.id === id)
      state.addresses[index] = address
    },
     deleteAddress (state, {id}) {
      const index = state.addressed.findIndex(address => address.id === id)
      //index番号と、削除する要素数(1)
      state.addresses.splice(index, 1)
    }
  },
  actions: {
    //ログインユーザーの取得時に記載。コレを呼び出せばstateのlogin_userに保存できる
    setLoginUser({ commit }, user){
   commit('setLoginUser', user)
    },
    //firebase上でログアウト後、このアプリ内でログアウトする
    deleteLoginUser({commit}){
      commit('deleteLoginUser')
    },
    //firebase上でログアウトする処理
    logout(){
      firebase.auth().signOut()
    },    
   fetchAddresses ({ getters, commit }) {
    firebase.firestore().collection(`users/${getters.uid}/addresses`).get().then(snapshot => {
      //snapshot変数にアドレスの情報が格納されている。配列のようだが、実は違っていてsnapshptというオブジェクト。
      //forEachでループしているオフジェクトをdocとしている
      //67章。getメソッドで取得した場合は、docオブジェクトからidを取得可能
      snapshot.forEach(doc => commit('addAddress', {id: doc.id, address: doc.data() }))
    })
    },
    login(){
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    //アクションメソッドの引数には、自動的にcontextオブジェクトが渡っている。
    //かきメソッドでは、context.commitメソッドだけを
    toggleSideMenu ({ commit }) {
      //mutationの方のtoggleSideMenuを呼び出し！！
      commit('toggleSideMenu')
    },
    //contextの中にgetters(中のuid)も含まれているため、こう書く事でgettrsを取得可能
    addAddress ({ getters, commit }, address) {
      //66章の時にシンブルクオテーションからバッククオテーションに修正！
      //ココがシングルクオテーションになっていたせいで保存先が『文字列の』${getters.uid}になっていた
      //addメソッドのコールバック関数にはdocumentオブジェクトが含まれており、その中にidが存在
      if(getters.uid) { 
        // firebaseへのデータ保存に関し：この時点(actions)で、firebaseへの値の保存は完了
        firebase.firestore().collection(`users/${getters.uid}/addresses`).add(address).then(doc =>{
        commit('addAddress', {id: doc.id, address})
        //storeのみに保存していた時は下記のみだった
        //commit('addAddress', address)
      })  
    }
  },
  updateAddress ({getters, commit} , {id, address })  {
    if(getters.uid) {
      //addと違う点は、doc(id)を指定している事くらい。
      // 更新された時点でコールバック関数(then以下)が呼ばれ、updateAddressがcommitされる
      firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).update(address).then(() =>{
      commit('updateAddress', {id, address})
    })  
  }
  },
  deleteAddress ({getters, commit} , {id })  {
    if(getters.uid) {
      // ↓この時点でfirebaseからは削除できるぽい！でも、 stateから削除するためにmutationにも繋ぐ事！
      firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id). delete().then(() =>{
      commit('updateAddress', {id})
    })  
  }
  }
},
  
  getters:{
    //gettersには自動的にstateが付随して渡ってくるため、そのstateを加工して返す処置
    userName: state => state.login_user ? state.login_user.displayName: '',
    photoURL: state => state.login_user ? state.login_user.photoURL: '',
    // firebaseにデータを保存するにあたり、uidが必要になる
    uid: state => state.login_user ? state.login_user.uid : null,
     //アドレス編集ページの関連.url
     //関数を返す関数.  id行以降：内側の関数, idにマッチするモのを取得
    getAddressById: state => id => state.addresses.find(address => address.id === id)
  }



})