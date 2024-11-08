import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.mount("#app");

app.config.errorHandler = (error) => {
  console.error(error);
};
