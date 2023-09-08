import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createPinia } from 'pinia'
import "@morpheme/themes/dist/morpheme/main.css"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './tailwind.css'
library.add(faPencilAlt);


// Pages
import Home from './components/Home.vue'
import Todo from './components/Todo.vue'
import About from './components/About.vue'
import LandingPage from './components/landingpage/index.vue'
import Footer from './components/Footer.vue';

const routes: RouteRecordRaw[] = [
    { path: '/home', component: Home },
    { path: '/todo', component: Todo },
    { path: '/about', component: About },
    { path: '/', component: LandingPage },
  ]

const pinia = createPinia()

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.component('Footer', Footer);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(pinia)
app.use(router)
app.mount('#app')
