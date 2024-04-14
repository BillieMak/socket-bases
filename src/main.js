import { createApp } from 'vue'

// import SockJS from 'sockjs-client'

import App from './App.vue'
import router from './router'
import store from './store'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {  IoSend , BiPeopleFill } from "oh-vue-icons/icons";

import './assets/tailwind.css'

addIcons(IoSend, BiPeopleFill );

const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(store)
app.use(router)



app.mount('#app')
