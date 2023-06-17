import { createApp } from 'vue'
import router from './plugins/router'
import App from './App.vue'

import './assets/css/main.css'

// create app instance
const app = createApp(App)

// use plugins
app.use(router)

// use app instance to mount to <div id="app">
app.mount('#app')