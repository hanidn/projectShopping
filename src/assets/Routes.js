import Index from "./pages/index/index.vue";
import About from "./pages/AboutUs/About.vue";
import Contact from "./pages/ContacUS/Contact.vue";
import main from "./pages/academy/Academy.vue";
import accessories from "./pages/news/News.vue";
import Login from "./pages/accout/login.vue";
import Register from "./pages/accout/register.vue";
import cart from "./pages/index/cart.vue";
import singleProuduct from "./pages/index/singleProduct.vue";
export const Routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/AboutUs",
    component: About
  },
  {
    path: "/ContacUS",
    component: Contact
  },
  {
    path: "/main",
    component: main
  },
  {
    path: "/accessories",
    component: accessories
  },

  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/cart", component: cart },
  { path: "/singleProuduct", component: singleProuduct }
];
