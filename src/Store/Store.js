import Vue from 'vue';
import Vuex from 'vuex';


import product from './Modules/Product';
import all from './Modules/all'
import contact from './Modules/contact'
import news from './Modules/news'
import searchAll from './Modules/searchAll'
import searchAcademy from './Modules/searchAcademy'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    modules: {
        product,
        all,
        contact,
        news,
        searchAll,
        searchAcademy
    }
});
