<template>

  <div class="login-body">

    <div>
      【{{bgUrl}}】
      <div class="login-body-title">XX系統管理</div>
    </div>




  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, toRefs, reactive, onMounted, } from 'vue'

  import doGet from './login'

  export default defineComponent({
    name: 'Login',

    setup() {

      const data = reactive({
        loginFormData: {
          username: '',
          password: ''
        },
        bgUrl: '',
        test: (index) => {
          console.log(index)
        },
      });

      onMounted(() => {
        console.log("onMounted()");
        console.log('开始请求壁纸')

        var bgData = doGet(
          "https://api.vvhan.com/api/bing?type=json"
        ).then(res => {
          console.log('结果', res)
          data.bgUrl = res + '测试'
          console.log('结果=', data.bgUrl)
        })


        // this.bgUrl = result.imgurl
      });

      const refData = toRefs(data);
      return {
        ...refData,
      }
    },

  })

</script>




<style scoped>
  @import url("./login.less");
</style>