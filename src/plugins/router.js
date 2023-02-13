import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import TheLogin from "@/components/Login/TheLogin";
import Page404 from "@/components/404/Page404";
const ClientsList = () => import("@/components/Clients/ClientsList.vue");
const AgencySettings = () => import("@/components/Agency/AgencySettings.vue");
const CreateReport = () => import("@/components/Report/CreateReport.vue");

const routes = [
  { path: "/login", name: "login", component: TheLogin },
  {
    path: "/",
    name: "list",
    component: ClientsList,
    meta: { requiresAuth: true },
  },
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
  { path: "/:pathMatch(.*)*", name: "404", component: Page404 },
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
