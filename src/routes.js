import { createWebHistory, createRouter } from "vue-router";
import Catalog from "./pages/Categories/Catalog.vue";
import editProduct from "./components/Editproduct.vue"
import Productdetail from "./components/Productdetail.vue";
import Header from "./components/Header.vue";
import Categorydetail from "./pages/Categories/Categorydetail.vue";
import Home from "./pages/Home/Home.vue";
import searchProduct from "./components/searchProduct.vue";
import Cart from "./Cart/Cart.vue"
import login from "./pages/Login.vue"




const routes = [
  {
    name: "Header",
    path: '/Header',
    component: Header,

  },

  {
    name: "Home",
    path: '/Home',
    component: Home,
  },
  {
    name: "login",
    path: '/',
    component: login,
  },
  {
    name: "Catalog",
    path: '/Catalog',
    component: Catalog,

  },
  {
    path: '/editProduct/:id',
    name: "editProduct",
    component: editProduct,
    props: true,
  },

  {
    path: '/Productdetail/:id',
    name: 'Productdetail',
    component: Productdetail,
    props: true,
  },
  {
    path: '/Categorydetail/:cat',
    name: 'Categorydetail',
    component: Categorydetail,
    props: true,
  },

  {
    path: '/searchProduct/:id',
    name: 'searchProduct',
    component: searchProduct,
    props: true,
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;