import App from "./App.vue";
import { createApp } from "vue";
import router from "./router.js";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "./assets/style.css";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use(MotionPlugin);
app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);
app.mount("#app");
