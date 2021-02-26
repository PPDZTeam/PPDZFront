import Vue from 'vue';
import App from './App';
import store from './store/index.js';

import axios from 'axios';
import router from './router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

/*组件引入*/
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(ElementUI);

new Vue({
	el: '#app',
	router,
    store,
	components: {App},
	template: '<App/>',
})
