import './style.css';
import { createApp } from 'vue';
import * as VueRouter from 'vue-router';


import 'highlight.js/styles/monokai.css';


import App from './App.vue';
import Home from './pages/Home.vue';
import Windows from './pages/Tools/Windows.vue';
import Winget from './pages/Tools/Winget.vue';
import Choco from './pages/Tools/Choco.vue';
import Scoop from './pages/Tools/Scoop.vue';
import TerminalWinget from './pages/Tools/Terminal/Winget.vue';
import TerminalChoco from './pages/Tools/Terminal/Choco.vue';
import TerminalScoop from './pages/Tools/Terminal/Scoop.vue';
import TerminalMsstore from './pages/Tools/Terminal/Msstore.vue';
import TerminalGithub from './pages/Tools/Terminal/Github.vue';
import VscodeWinget from './pages/Tools/Vscode/Winget.vue';
import VscodeChoco from './pages/Tools/Vscode/Choco.vue';
import VscodeScoop from './pages/Tools/Vscode/Scoop.vue';
import VscodeManual from './pages/Tools/Vscode/Manual.vue';


const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/tools/windows', component: Windows, name: 'Windows'},
    {path: '/tools/winget', component: Winget, name: 'Winget'},
    {path: '/tools/choco', component: Choco, name: 'Choco'},
    {path: '/tools/scoop', component: Scoop, name: 'Scoop'},
    {path: '/tools/terminal/winget', component: TerminalWinget, name: 'Terminal Winget'},
    {path: '/tools/terminal/choco', component: TerminalChoco, name: 'Terminal Choco'},
    {path: '/tools/terminal/scoop', component: TerminalScoop, name: 'Terminal Scoop'},
    {path: '/tools/terminal/github', component: TerminalGithub, name: 'Terminal Github'},
    {path: '/tools/terminal/msstore', component: TerminalMsstore, name: 'Terminal Msstore'},
    {path: '/tools/vscode/winget', component: VscodeWinget, name: 'VsCode Winget'},
    {path: '/tools/vscode/choco', component: VscodeChoco, name: 'VsCode Choco'},
    {path: '/tools/vscode/scoop', component: VscodeScoop, name: 'VsCode Scoop'},
    {path: '/tools/vscode/manual', component: VscodeManual, name: 'VsCode Manual'},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);

app.mount('#app');