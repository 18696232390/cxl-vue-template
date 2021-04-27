import './registerServiceWorker';
import 'element-plus/lib/theme-chalk/index.css';

import {
  createApp,
  h,
} from 'vue';

import * as echarts from 'echarts';
import { plugin } from 'echarts-for-vue';
// import * as echarts from 'echarts';
// 导入ElementUI Plus
import elementUI from 'element-plus';

import App from './App.vue';
import router from './router';
import store from './store';

const Vue = createApp(App);

Vue.use(store);
Vue.use(router);

// Vue.use(VueAMap);
// // 初始化vue-amap
// VueAMap.initAMapApiLoader({
//   // 高德的key
//   key: 'YOUR_KEY',
//   // 插件集合
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//   // 高德 sdk 版本，默认为 1.4.4
//   v: '1.4.4'
// });

Vue.use(elementUI,  { size: 'small', zIndex: 3000 });
Vue.use(plugin, { echarts, h });      
Vue.mount("#app");

// Vue.config.globalProperties.echarts = echarts