import Vue from 'vue'
import axios from "axios";
import base from "./base64";
import VueCookie from 'vue-cookie';
Vue.use(VueCookie);
export default{
    login(params){
        return axios.get('/static/json/code.json',{params})
    },
    setAuth(user,token){
        VueCookie.delete('user');
        VueCookie.delete('token');
        var date = new Date();
        date.setHours(date.getHours() + 5);
        var encodeuser = base.encode(user);
        var encodetoken = base.encode(token);
        VueCookie.set('user',encodeuser, { expires: date });
        VueCookie.set('token', encodetoken, { expires: date });
    },
    deleteAuth(){
        VueCookie.delete('user');
        VueCookie.delete('token');
    }
}