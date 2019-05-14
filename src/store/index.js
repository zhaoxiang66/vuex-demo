import Vue from 'vue';
import Vuex from 'vuex';
import changeColor from './modules/changeColor';
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        changeColor
    }
})