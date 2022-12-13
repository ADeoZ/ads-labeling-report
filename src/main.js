import App from "@/components/App.vue";
import vuetify from "@/plugins/vuetify";
import { createApp } from "vue";
import { router } from "@/plugins/router";
import store from "@/store";

createApp(App).use(store).use(router).use(vuetify).mount("#helenlabeling");
