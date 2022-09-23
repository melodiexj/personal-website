import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import './gallery.css'
import App from './App.vue'
import About from './pages/About.vue'
// import Home from './pages/App.vue'

const routes = [
  { path: '/', component: About },
  // { path: '/about', component: About },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
