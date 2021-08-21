import Vue from 'vue'
import App from './App.vue'
import axios from "./utils/http"

Vue.config.productionTip = false

Vue.http = Vue.prototype.$http = axios;

new Vue({
    render: h => h(App),
}).$mount('#app')