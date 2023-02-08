import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import TheLogin from "@/components/Base/TheLogin";
import The404Page from "@/components/Base/The404Page";
const ClientsList = () => import("@/components/ClientsList.vue");
const AgencySettings = () => import("@/components/AgencySettings.vue");
const CreateReport = () => import("@/components/CreateReport.vue");

const routes = [
  {
    path: "/",
    name: "list",
    component: ClientsList,
    meta: { requiresAuth: true },
  },
  { path: "/login", name: "login", component: TheLogin },
  {
    path: "/report",
    name: "report",
    component: CreateReport,
    meta: { requiresAuth: true },
  },
  {
    path: "/settings",
    name: "settings",
    component: AgencySettings,
    meta: { requiresAuth: true },
  },
  { path: "/:pathMatch(.*)*", name: "404", component: The404Page },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const canAccess = await store.state.auth.loggedStatus;
  if (!canAccess && to.meta.requiresAuth) return "/login";
});

export { router };
