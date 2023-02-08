import { createRouter, createWebHistory } from "vue-router";
import TheLogin from "@/components/Base/TheLogin";
import The404Page from "@/components/Base/The404Page";
const ClientsList = () => import("@/components/ClientsList.vue");
const AgencySettings = () => import("@/components/AgencySettings.vue");
const CreateReport = () => import("@/components/CreateReport.vue");

const routes = [
  { path: "/", name: "list", component: ClientsList },
  { path: "/login", name: "login", component: TheLogin },
  { path: "/report", name: "report", component: CreateReport },
  { path: "/settings", name: "settings", component: AgencySettings },
  { path: "/:pathMatch(.*)*", name: "404", component: The404Page },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
