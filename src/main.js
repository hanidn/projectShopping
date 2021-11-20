import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResorce from 'vue-resource';
import Vuelidate from 'vuelidate'
import App from './App.vue';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import { Routes } from './assets/Routes';
import { store } from './Store/Store';


Vue.component('date-picker', VuePersianDatetimePicker);


const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});
Vue.use(VueResorce);
Vue.use(VueRouter)
Vue.use(Vuelidate)
new Vue({
    el: '#app',
    store,

    router,
    render: h => h(App)
})
