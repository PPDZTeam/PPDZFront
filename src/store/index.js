import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        isLogin: true,
    },
    getters:{
        getLoginState: state => {
            return state.isLogin;
        }
    }
})

export default store;
