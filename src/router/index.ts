import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import TimeTracker from "@/views/TimeTracker.vue";
import MyProjects from "@/views/MyProjects.vue";

const routes: RouteRecordRaw[] = [
  { path: "/time-tracker", name: "TimeTracker", component: TimeTracker },
  { path: "/projects", name: "MyProjects", component: MyProjects },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
