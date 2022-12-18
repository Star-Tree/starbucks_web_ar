import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import adapter from 'webrtc-adapter';

createApp(App).use(store).use(router).mount('#app')
