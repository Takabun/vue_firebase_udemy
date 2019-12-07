
// 4.Vueコンストラクタのelオプション
// 8.Vue.jsのテンプレートと仮想DOM
  // const vm = new Vue({
  //   //$mountを使うかelを使うかどっちか
  //   // el: '#app',
  //   data: {
  //     message: 'Hello, World!'
  //   }
  // })

  // // vm: vuemodelの略。vueインスタンス生成時に存在しなかった要素に動的にマウントしたい時
  // vm.$mount('#app')


// 5.Vueコンストラクタのdataオプション
  // const vm = new Vue({
  //   el: '#app',
  //   //関数で戻り値を指定したパターン
  //   //data: function() {...の略
  //   data() {
  //     return {
  //       message: 'Hello, World!'
  //     }
  //   }
  // })
  // window.vm = vm


//6.Vueインスタンスの$watchメソッド
// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       message: 'Hello, World!'
//     }
//   }
// })

// window.vm = vm

// vm.$watch(function () {
//   //第一引数：監視対象の値を返す関数
//   return this.message
//   //第二引数：値が変わった時のコールバック関数
// }, function (message) {
//   console.log('変更後の値：' + message)
// })


// 7.Vueインスタンスのwatchオプション
// const vm = new Vue({
//   el: '#app',
//  data() {
//     return {
//       numbers: [],
//       total_num: 0
//     }
//   },
//   watch: {
//     //numbrersの値の変化を監視
//     numbers(value) {
//       this.total_num = 0
//       this.numbers.forEach(number => {
//         this.total_num += number        
//       })
//     }
//   }
// })

// window.vm = vm


// 9. v-bindディレクティブの解説
// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       message: 'Hello, World!'
//     }
//   }
// })

// window.vm = vm


// 10. フィルター機能の解説
// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       sum: 1000
//     }
//   },
//   filters: {
//     numberWithDelimiter(value) {
//       if (!value) return '0'
//       return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
//     }
//   }
// })

// window.vm = vm

// 11. computedプロパティの解説
// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       button_disabled: true,
//       hoge: true
//     }
//   },
//   computed: {
//     button_label() {
//       // this.hoge = !this.hoge
//       return this.button_disabled ? '無効' : '有効'
//     },
    
//   }
// })

// window.vm = vm


// 12.v-onディレクティブとmethodsプロパティ
// event.target: そのイベントが起きたhtmlの箇所
// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       message: 'Hello, World!'
//     }
//   },
//   methods: {
//     clickLog(event) {
//       console.log(this.message)
//       console.log(event.target)
//     },
//     hoverLog() {
//       console.log('hover')
//     }
//   }
// })

// window.vm = vm


// 13. v-if, v-else-if,v-elseディレクティブ
// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       message: 'Hello, World!',
//       reserve: false
//     }
//   }
// })

// window.vm = vm

//  14. v-if, v-else-if,v-elseディレクティブを使用した条件分岐
// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       message: 'こんにちは'
//     }
//   }
// })

// window.vm = vm



// 15.v-forディレクティブの解説 
// new Vue({
//   el: "#app",
//   data: {
//     todos: [
//       { text: "Learn JavaScript", done: false },
//       { text: "Learn Vue", done: false },
//       { text: "Play around in JSFiddle", done: true },
//       { text: "Build something awesome", done: true }
//     ]
//   },
//   methods: {
//   	toggle: function(todo){
//     	todo.done = !todo.done
//     }
//   }
// })



// 16. v-forディレクティブにおけるkeyの指定について
// new Vue({
//   el: "#app",
//   data: {
//     todos: [
//       { text: "Learn JavaScript", done: false },
//       { text: "Learn Vue", done: false },
//       { text: "Play around in JSFiddle", done: true },
//       { text: "Build something awesome", done: true }
//     ]
//   },
//   methods: {
//   	toggle: function(todo){
//     	todo.done = !todo.done
//     }
//   }
// })



// 17 v-modelディレクティブの解説
// const vm = new Vue({
//   el: '#app',
//   data: {
//     name: '山田',
//     email: 'user1@example.jp',
//     text: 'xxxxについて'
//   },
//   methods: {
//     submit() {
//       const inquiry = `
//         次の問い合わせ内容を送信しました。
        
//         【名前】
//         ${this.name}
//         【メールアドレス】
//         ${this.email}
//         【お問合せ内容】
//         ${this.text}
//       `
//       alert(inquiry)      
//     }
//   }
// })

// window.vm = vm


// 18. templateオプションの解説
// const vm = new Vue({
//   el: '#app',
//   template: `
// 　   <div v-if="message">
//       {{ message }}
//     </div>
//     <div v-else>
//       メッセージがありません
//     </div>
//   `,
//   data() {
//     return {
//       message: 'こんにちは'
//     }
//   }
// })

// window.vm = vm


// 20 ライフサイクルフックで呼び出されるメソッドの定義方法
// 再描画時：vm.message = 'Change'
// インスタンス削除時：vm.$destroy()
// createdに何か書くと(現在時刻表示とか)、それはcreatedが完了した後にもずっと続くので、beforeCreateに書くべし
// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       message: 'こんにちは'
//     }
//   },
//   beforeCreate() {
//     console.log('Vueインスタンス作成前')
//   },
//   created() {
//     console.log('Vueインスタンス作成後')
//   },
//   beforeMount() {
//     console.log('マウント前')
//   },
//   mounted() {
//     console.log('マウント後') 
//   },
//   beforeUpdate() {
//     console.log('再描画前')
//   },
//   updated() {
//     console.log('再描画後')
//   },
//   beforeDestroy() {
//     console.log('Vueインスタンス削除前')
//   },
//   destroyed() {
//     console.log('Vueインスタンス削除後')
//   }
// })

// window.vm = vm



// 22. コンポーネントの作成方法
// コンポーネントでは必ず、関数の戻り値としてcomponentを定義する事！
// コンポーネントの生成『後』にVueインスタンスを作るという順序を忘れないように！
// Vue.component('user-list', {
//   data() {
//     return {
//       users: [
//         { id: 1, name: 'ユーザー１' },
//         { id: 2, name: 'ユーザー2' },
//         { id: 3, name: 'ユーザー3' },
//         { id: 4, name: 'ユーザー4' },
//         { id: 5, name: 'ユーザー5' }
//       ]
//     }
//   },
//   template: `
//     <ul>
//       <li v-for="user in users" :key="user.id">
//         {{ user.name }}
//       </li>
//     </ul>
//   `
// })

// const vm = new Vue({
//   el: '#app',
// })


// 23.コンポーネントの親子構造について
// templateの一番上で<div>で囲むとかしてハッキリ親子関係をつけないとエラーる
// const ListTitle = {
//   template: `
//     <h2>ユーザーリスト</h2>
//   `
// }

// const UserList = {
//   components: {
//     'list-title': ListTitle
//   },
//   data() {
//     return {
//       users: [
//         { id: 1, name: 'ユーザー１' },
//         { id: 2, name: 'ユーザー2' },
//         { id: 3, name: 'ユーザー3' },
//         { id: 4, name: 'ユーザー4' },
//         { id: 5, name: 'ユーザー5' }
//       ]
//     }
//   },
//   template: `
//     <div>
//       <list-title></list-title>
//       <ul>
//         <li v-for="user in users" :key="user.id">
//           {{ user.name }}
//         </li>
//       </ul>
//     </div>
//   `
// }

// const vm = new Vue({
//   el: '#app',
//   components: {
//     'user-list': UserList
//   }
// })



// 24.コンポーネントのローカル登録とグローバル登録(グローバルver)
// Vue.component('list-title', {
//   template: `
//     <h2>ユーザーリスト</h2>
//   `
// })

// Vue.component('user-list', {
//   data() {
//     return {
//       users: [
//         { id: 1, name: 'ユーザー１' },
//         { id: 2, name: 'ユーザー2' },
//         { id: 3, name: 'ユーザー3' },
//         { id: 4, name: 'ユーザー4' },
//         { id: 5, name: 'ユーザー5' }
//       ]
//     }
//   },
//   template: `
//     <div>
//       <list-title></list-title>
//       <ul>
//         <li v-for="user in users" :key="user.id">
//           {{ user.name }}
//         </li>
//       </ul>
//     </div>
//   `
// })

// const vm = new Vue({
//   el: '#app',
// })



// 24.コンポーネントのローカル登録とグローバル登録(ローカルver)
// 23の時点ではグローバル。template上のどこからでも呼び出せるが、読み込みに時間がかかったりする
// const ListTitle = {
//   template: `
//     <h2>ユーザーリスト</h2>
//   `
// }

// const UserList = {
//   components: {
//     'list-title': ListTitle
//   },
//   data() {
//     return {
//       users: [
//         { id: 1, name: 'ユーザー１' },
//         { id: 2, name: 'ユーザー2' },
//         { id: 3, name: 'ユーザー3' },
//         { id: 4, name: 'ユーザー4' },
//         { id: 5, name: 'ユーザー5' }
//       ]
//     }
//   },
//   template: `
//     <div>
//       <list-title></list-title>
//       <ul>
//         <li v-for="user in users" :key="user.id">
//           {{ user.name }}
//         </li>
//       </ul>
//     </div>
//   `
// }

// const vm = new Vue({
//   el: '#app',
//   components: {
//     'user-list': UserList
//   }
// })



// 25.親コンポーネントから子コンポーネントへのデータの伝達
// props:親コンポーネントからどんな値を受け取るかを定義したもの
// v-bind:user=<ユーザーオブジェクト>で受け取ったもの
// selected_user:選択されたユーザーを格納
//  <user-detail :user='selected_user'></user-detail>: v-bindを使い、seleced_userを子コンポーネントに渡す

// 26. propsとdataの違いについて
// Q. 子コンポーネントからpropsで受け取った値を変更できる？？？
// props: {userName: {type:String}}
// 子コンポーネント内 <input v-model="userName">
// A. コレはエラー。userName = {}オブジェクト自体を変更するのはだめ！
// user.nameというように、オブジェクト自体を中身のプロパティのみを変更するのは可能



// const ListTitle = {
//   template: `
//     <h2>ユーザーリスト</h2>
//   `
// }

// const UserDetail = {
//   props: {
//     user: { type: Object }
//   },
//   template: `
//     <div>
//       <h2>選択中のユーザー</h2>
//       {{ user.name }}
//     </div>
//   `
// }

// const UserList = {
//   components: {
//     'list-title': ListTitle,
//     'user-detail': UserDetail
//   },
//   data() {
//     return {
//       users: [
//         { id: 1, name: 'ユーザー１' },
//         { id: 2, name: 'ユーザー2' },
//         { id: 3, name: 'ユーザー3' },
//         { id: 4, name: 'ユーザー4' },
//         { id: 5, name: 'ユーザー5' }
//       ],
//       selected_user: {}
//     }
//   },
//   template: `
//     <div>
//       <list-title></list-title>
//       <ul>
//         <li v-for="user in users" :key="user.id" @click='selected_user = user'>
//           {{ user.name }}
//         </li>
//       </ul>
//       <user-detail :user='selected_user'></user-detail>
//      </div>
//   `
// }

// const vm = new Vue({
//   el: '#app',
//   components: {
//     'user-list': UserList
//   }
// })



// 27.子コンポーネントから親コンポーネントへのデータの渡し方
// 親にデータを渡す $emit(①イベント, ②渡す値)
// 渡された値は親の$eventに入り'user_name = $event'になる
// const UserForm = {
//   template: `
//     <div>
//       <div>ユーザー名変更フォーム</div>  
//       <input v-model='user_name' />
//       <button @click='update'>名前変更</button>
//     </div>
//   `,
//   props: {
//     userName: { type: String, required: true }
//   },
//   data() {
//     return {
//       user_name: this.userName
//     }
//   },
//   methods: {
//     update () {
//       this.$emit('update:user-name', this.user_name)
//     } 
//   }
// }

// const UserDetail = {
//   components: {
//     'user-form': UserForm
//   },
//   data() {
//     return {
//       user_name: 'ヤマダ タロウ'
//     }
//   },
//   template: `
//     <div>
//       <div>
//         <span>ユーザー名： {{ user_name }}</span>
//       </div>
//       <div>
//         <user-form :user-name='user_name' @update:user-name='user_name = $event'></user-form>
//       </div>
//     </div>
//   `
// }

// const vm = new Vue({
//   el: '#app',
//   components: {
//     'user-detail': UserDetail
//   }
// })


// 28..sync修飾子を使用したのデータ
// syncをつける事で@update:user-name='user_name = $eventを消せる
// const UserForm = {
//   template: `
//     <div>
//       <div>ユーザー名変更フォーム</div>  
//       <input v-model='user_name' />
//       <button @click='update'>名前変更</button>
//     </div>
//   `,
//   props: {
//     userName: { type: String, required: true }
//   },
//   data() {
//     return {
//       user_name: this.userName
//     }
//   },
//   methods: {
//     update () {
//       this.$emit('update:userName', this.user_name)
//     } 
//   }
// }

// const UserDetail = {
//   components: {
//     'user-form': UserForm
//   },
//   data() {
//     return {
//       user_name: 'ヤマダ タロウ'
//     }
//   },
//   template: `
//     <div>
//       <div>
//         <span>ユーザー名： {{ user_name }}</span>
//       </div>
//       <div>
//         <user-form :user-name.sync='user_name'></user-form>
//       </div>
//     </div>
//   `
// }

// const vm = new Vue({
//   el: '#app',
//   components: {
//     'user-detail': UserDetail
//   }
// })



// 29. スロットの使用方法について
// const Layout = {
//   template: `
//     <div class="container">
//       <header>
//         <slot name="header"></slot>
//       </header>
//       <main>
//         <slot></slot>
//       </main>
//       <footer>
//         <slot name="footer"></slot>
//       </footer>
//     </div>
//   `
// }

// const vm = new Vue({
//   el: '#app',
//   components: {
//     'layout': Layout
//   }
// })
