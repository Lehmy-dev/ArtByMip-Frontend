import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'


const app = createApp(App)

app.config.globalProperties.$http = Axios
app.use(router)
app.mount('#app')
