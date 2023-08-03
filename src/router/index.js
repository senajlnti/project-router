import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue"; 
import Produk from "@/views/Produk.vue";
import Detail from "@/views/Detail.vue";
import Kategori from "@/views/Kategori.vue";
import KategoriProduk from "@/views/KategoriProduk.vue";
import { users } from "../assets/user";
import Login from "../views/Login.vue";






const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
    const loggedInUser = users.find((user) => user.isLoggedIn == true);
    if (loggedInUser) {
    next(); // Lanjutkan navigasi ke halaman produk jika sudah login
    } else {
    next("/login"); // Alihkan ke halaman login jika belum login
    }
   },
  },
  {
    path: "/detail/id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },

  {
    path: "/Kategori",
    name: "Kategori",
    component: Kategori
  },
  {
    path: "/KategoriProduk/id_kategori",
    name: "KategoriProduk",
    component: KategoriProduk,
    props: true,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    props: true,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;