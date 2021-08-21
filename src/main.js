import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from "./utils/http"
import ElementUI from 'element-ui';
import iView from 'iview';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(iView)

Vue.http = Vue.prototype.$http = axios;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')