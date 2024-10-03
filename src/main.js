import App from "./App.vue";
import { createApp } from "vue";
import router from "./router.js";
import PrimeVue from "primevue/config";
import "./assets/style.css";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true });
app.use(router);
app.mount("#app");
