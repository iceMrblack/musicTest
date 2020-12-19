import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入elementui框架
import ElementUI from 'element-ui';
// 引入ui的css
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
