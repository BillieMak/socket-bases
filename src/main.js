import { createApp } from 'vue'

// import VueNativeSock from 'vue-native-websocket'

import SockJS from 'sockjs-client'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/tailwind.css'

const app = createApp(App)

app.config.globalProperties.$socket = new SockJS('http://localhost:8080/chat');

app.use(store)
app.use(router)



app.mount('#app')
