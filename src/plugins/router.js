import { createRouter, createWebHistory } from "vue-router";
import AgencySettings from "@/components/AgencySettings.vue";
import ClientsList from "@/components/ClientsList.vue";
import CreateReport from "@/components/CreateReport.vue";
import The404Page from "@/components/Base/The404Page";

const routes = [
  { path: "/", name: "list", component: ClientsList },
  { path: "/report", name: "report", component: CreateReport },
  { path: "/settings", name: "settings", component: AgencySettings },
  { path: "/:pathMatch(.*)*", name: "404", component: The404Page },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
