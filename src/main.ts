import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import Home from './pages/Home.vue';
import Experiences from './pages/Experiences.vue';
import Blog from './pages/Blog.vue';
import Hobbies from './pages/Hobbies.vue';
// import About from './pages/About.vue';
// import Contact from './pages/Contact.vue';
import Error from './pages/Error.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/experiences', component: Experiences },
  { path: '/blog', component: Blog },
  { path: '/hobbies', component: Hobbies },
  // { path: '/about', component: About },
  // { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
