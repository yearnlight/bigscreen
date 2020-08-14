import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import BaiduMap from 'vue-baidu-map';
import Axios from "axios";
Vue.use(dataV)
Vue.use(BaiduMap, {
  ak: "Ze9OqgmMenxVVxSFhkECy06rbF72VN3m"
});

// 引入vue-awesome
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/index.js'
import ECharts from 'vue-echarts';
// 全局注册图标
Vue.component('icon', Icon)
Vue.component('v-chart', ECharts);

import './assets/scss/style.scss'
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')