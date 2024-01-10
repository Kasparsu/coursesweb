import './style.css';
import { createApp } from 'vue';
import * as VueRouter from 'vue-router';

import App from './App.vue';
import Home from './pages/Home.vue';
const routes = [
    {path: '/', component: Home, name: 'Home'},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');