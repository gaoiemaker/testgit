import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import I18n from './lang/i18n.js'
const app = createApp(App)

app.use(I18n).mount('#app')
