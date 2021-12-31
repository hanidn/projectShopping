import Index from './pages/index/index.vue';
import About from './pages/AboutUs/About.vue';
import Contact from './pages/ContacUS/Contact.vue';
import main from './pages/academy/Academy.vue';
import accessories from './pages/news/News.vue';
import Login from './pages/accout/login.vue'
import Register from './pages/accout/register.vue'
import cart from './pages/index/cart.vue'
import singleProuduct from './pages/index/singleProduct.vue'
import log from './pages/accout/log.vue'
import reg from './pages/accout/reg.vue'
import cntct from './pages/ContacUS/cntct.vue'
import single from './pages/index/single.vue'
import pardakht from './pages/index/pardakht.vue'
import search from './pages/shared/search.vue'
import movie from './pages/movie/movie.vue'
export const Routes = [{
        path: '/',
        component: Index
    }, {
        path: '/AboutUs',
        component: About
    }, {
        path: '/ContacUS',
        component: Contact
    },
    {
        path: '/main',
        component: main
    },
    {
        path: '/accessories',
        component:accessories
    },
    {
        path: '/log',
        component:log
    },
    {
        path: '/reg',
        component:reg
    },
    {
        path: '/cntct',
        component:cntct
    },
    {
        path: '/single',
        component:single
    },
    {
        path: '/pardakht',
        component:pardakht
    },
    {
        path: '/search',
        component:search
    },
    {
        path: '/movie',
        component:movie
    },
    {path:'/login',
    component:Login},
    {path:'/register',
    component:Register},
    {path:'/cart',
component:cart},
{path:'/singleProuduct',
component:singleProuduct}
];