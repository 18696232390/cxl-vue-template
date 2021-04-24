import './registerServiceWorker';
import 'element-plus/lib/theme-chalk/index.css';

import { createApp } from 'vue';

// import * as echarts from 'echarts';
// 导入ElementUI Plus
import elementUI from 'element-plus';

import App from './App.vue';
import router from './router';
import store from './store';

const Vue = createApp(App);

Vue.use(store);
Vue.use(router);

Vue.use(elementUI,  { size: 'small', zIndex: 3000 });

Vue.mount("#app");

// Vue.config.globalProperties.echarts = echarts