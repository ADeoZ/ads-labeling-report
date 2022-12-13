import App from "@/components/App.vue";
import vuetify from "@/plugins/vuetify";
import { createApp } from "vue";
import { router } from "./plugins/router";

createApp(App).use(router).use(vuetify).mount("#helenlabeling");
