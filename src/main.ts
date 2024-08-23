import { createApp } from 'vue'

import './assets/css/theme.css'
import './assets/css/public.scss'
import './index.css'
import router from '@/router'
import pinia from './store'
import App from './App.vue'

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
