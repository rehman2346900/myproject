import { createApp } from 'vue';
import App from './App.vue';
import router from "./routes";
import Store from ".";


createApp(App).use(router).use(Store).mount('#app')
