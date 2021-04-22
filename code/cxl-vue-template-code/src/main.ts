import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";


// 导入ElementUI Plus
import elementUI from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const Vue = createApp(App);

Vue.use(store);
Vue.use(router);

Vue.use(elementUI,  { size: 'small', zIndex: 3000 });

Vue.mount("#app");

