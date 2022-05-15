import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/styleSheet.css";
import titleMixin from "./mixins/titleMixin";
createApp(App).use(store).use(router).mixin(titleMixin).mount("#app");
