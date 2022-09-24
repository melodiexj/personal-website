import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import './gallery.css'
import App from './App.vue'
import About from './pages/About.vue'
import Gallery from './pages/Gallery.vue'
import Hobbies from './pages/Hobbies.vue'

const routes = [
  { path: '/', component: About },
  { path: '/gallery/', component: Gallery },
  { path: '/hobbies/', component: Hobbies },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
