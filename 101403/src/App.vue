<template>
  <v-app>
    <v-toolbar app>
      <!-- //v-showを使い、ログイン時だけサイドバーを表示するようにしている！ -->
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    <v-toolbar-items v-if="$store.state.login_user">
      <v-btn @click="logout">ログアウト</v-btn>
    </v-toolbar-items>
        </v-toolbar>
    <SideNav/>

    <v-content>
      <!-- リンクに応じたview(addresses等)が表示される -->
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import SideNav from './components/SideNav'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    SideNav
  },
  // ログインユーザー情報の取得は全ページ共通なのでApp.vue内に書き、またcreated時に発動している
  created () {
    // onAuthStateChanged: 認証の状態が変わった時に呼び出されるコールバック関数
    // ログイン時は引数にuserの情報が渡され、ログアウトしたときはnullが渡ってくる
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
        this.fetchAddresses()
        //userがログインして、かつ現在homeのページにいたら、連絡先のページに移動
        if(this.$router.currentRoute.name === 'home') this.$router.push({name: 'addresses'})
      } else {
        // logoutボタンを押した後、非同期にココに来てdeleteLoginUserが発動
        this.deleteLoginUser()
        this.$router.push({name: 'home'})
      }
    })
  },
  data () {
    return {
      //
    }
  },
  methods: {
    //mapActionsがあれば、別でopenSideMenu的なメソッドをここで作らなくともactions内のメソッドにアクセス可能！
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser','fetchAddresses'])
  }
}
</script>