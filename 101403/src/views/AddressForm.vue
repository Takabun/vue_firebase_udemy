<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>連絡先編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
            <!-- 下のaddress: {}に格納 -->
               <v-text-field v-model="address.name" label="名前"></v-text-field>
               <v-text-field v-model="address.tel" label="電話番号"></v-text-field>
               <v-text-field v-model="address.email" label="メールアドレス"></v-text-field>
               <v-text-field v-model="address.address" label="住所"></v-text-field>
               <!-- pushを押す事でページ遷移 -->
               <v-btn @click="$router.push({ name: 'addresses' })">キャンセル</v-btn>
               <v-btn color="info" @click="submit">保存</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created (){
     //ルートのパラメーターにアドレスIDが含まれているか(つまり、編集の関連か)をチェック
     // ココに何もなければ新規となる 
    if (!this.$route.params.address_id) return
     //getterメソッドを呼び出している。該当する連絡先のオブジェクトを取得
    const address = this.$store.getters.getAddressById(this.$route.params.address_id)
  if(address) {
    //連絡先を取得できた場合はこう
   this.address = address
    //連絡先を取得できなかった場合は一覧画面に遷移
  } else {
   this.$router.push({ name: 'addresses'})
  }
  } ,
  data () {
    return {
      address: {}
    }
  },
  methods: {
    submit () {
      if(this.$route.params.address_id){
          this.updateAddress({ id: this.$route.parama.address_id, address: this.address })
      } else {
        // actionに引数を渡す！
          this.addAddress(this.address)
      }
      // ページ遷移
      this.$router.push({ name: 'addresses' })
      // Formのリセット
      this.address = {}
    },
    ...mapActions(['addAddress', 'updateAddress'])
  }
}
</script>