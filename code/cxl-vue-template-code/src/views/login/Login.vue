<template>
  <div class="login-body">
    <!-- <div class="login-logo">
      <div>
        <div data-role="cube"></div>
      </div>
    </div> -->
    <div class="login-form">
      <div class="login-form-card">
        <div class="login-form-title">
          <div>cxl-vue-template 登录</div>
        </div>
        <div class="login-form-content">
          <el-form :model="loginFormData">
            <el-form-item label-width="0px">
              <el-input v-model="loginFormData.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label-width="0px">
              <el-input type="password" v-model="loginFormData.password" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <center>
            <div class="login-form-footer">
              <button class="login-form-btn login" @click="loginHandler()">登 录</button>
              <button class="login-form-btn register" @click="loginHandler()">注 册</button>
            </div>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted } from 'vue';
import doGet from './login';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Login',
  components: {
    // eslint-disable-next-line vue/no-unused-components
  },
  setup() {
    const route = useRouter();
    const data = reactive({
      loginFormData: {
        username: '',
        password: '',
      },
      bgUrl: '',
      test: (index) => {
        console.log(index);
      },
      loginHandler: () => {
        console.log('点击了登录');

        if (data.loginFormData.username === 'admin' && data.loginFormData.password === '123456') {
          // 跳转到首页
          var notify = (window as any).Metro.notify;
          notify.setup({
            width: 300,
            duration: 1000,
            animation: 'easeOutBounce',
          });
          notify.create('登录成功');
          notify.reset();
          route.push('/');
        } else {
          // eslint-disable-next-line no-redeclare
          var notify = (window as any).Metro.notify;
          notify.create('账号或密码输入有误！', '温馨提示', {
            cls: 'alert',
            onClose: function () {
              console.log('关闭');
            },
          });
        }
      },
    });

    onMounted(() => {
      console.log('onMounted()');
      console.log('开始请求壁纸');

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      var bgData = doGet('https://api.vvhan.com/api/bing?type=json').then((res) => {
        console.log('结果', res);
        data.bgUrl = res + '测试';
        console.log('结果=', data.bgUrl);
      });

      // this.bgUrl = result.imgurl
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>

<style scoped lang="less">
@import url('./login.less');
</style>
