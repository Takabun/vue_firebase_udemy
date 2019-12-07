// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import vuetify from './plugins/vuetify';

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')



import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyDLkpHUarbXAuoSLI0KK2n0eIH_jDZ81GE",
    authDomain: "my-address-pj-7d74c.firebaseapp.com",
    databaseURL: "https://my-address-pj-7d74c.firebaseio.com",
    projectId: "my-address-pj-7d74c",
    storageBucket: "my-address-pj-7d74c.appspot.com",
    messagingSenderId: "84960590741",
    appId: "1:84960590741:web:299b5d4ade41f321ca549c",
    measurementId: "G-EP7G522MPF"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  // firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  // h関数は、createElement関数のalias(別名)である。ここではApp(App.vue)コンポネントをレンダリング
  render: h => h(App)
}).$mount('#app')
