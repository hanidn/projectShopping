import Index from './pages/index/index.vue';
import About from './pages/AboutUs/About.vue';
import Contact from './pages/ContacUS/Contact.vue';
import main from './pages/academy/Academy.vue';
import accessories from './pages/news/News.vue';
import Store from './pages/store/Store.vue';
import Inv from './pages/inv/main.vue'
import Restore from './pages/academy/restore.vue';
import Environment from './pages/academy/environment.vue';
import All from './pages/academy/all.vue';

import Newst from './pages/store/newest.vue';
import Plan from './pages/store/plantree.vue';
import restore from './pages/store/restoring.vue'
import suggestion from './pages/store/suggestion.vue'


import newst from './pages/news/newst.vue';
import Popular from './pages/news/popular.vue'
import Score from './pages/news/highscore.vue'


import Login from './pages/accout/login.vue'
import Register from './pages/accout/register.vue'
import cart from './pages/index/cart.vue'
import singleProuduct from './pages/index/singleProduct.vue'
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
    }, {
        path: '/ZinominShop',
   beforeEnter()  {
       location.href='https://zinominshop.ir'
   }
    },
    {
        path: '/invitation',
        component: Inv
    },
    {
        path: '/Academy/all',
        component: All
    }, {
        path: '/Academy/restore',
        component: Restore
    },
    {
        path: '/Academy/environment',
        component: Environment
    },


    {
        path: '/Store/newst',
        component: Newst
    }, {
        path: '/Store/plantree',
        component: Plan
    }, {
        path: '/Store/restoring',
        component: restore
    }, {
        path: '/Store/suggestion',
        component: suggestion,
        name: 'products'
    }, {
        path: '/News/newst',
        component: newst
    }, {
        path: '/News/popular',
        component: Popular
    }, {
        path: '/News/score',
        component: Score
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