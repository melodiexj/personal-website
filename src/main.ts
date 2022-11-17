import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import './gallery.css';
import App from './App.vue';
import Home from './pages/Home.vue';
import Gallery from './pages/Gallery.vue';
import Interests from './pages/Interests.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Error from './pages/Error.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/gallery', component: Gallery },
  { path: '/interests', component: Interests },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
