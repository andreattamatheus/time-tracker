import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import App from "@/views/Home.vue";
import TimeTracker from "@/views/Tasks/TimeTracker.vue";
import IndexProject from "@/views/Projects/Index.vue";
import ListProject from "@/views/Projects/List.vue";
import FormProject from "@/views/Projects/Form.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: App },
  { path: "/time-tracker", name: "TimeTracker", component: TimeTracker },
  {
    path: "/projects",
    component: IndexProject,
    children: [
      { path: "", name: "Index", component: ListProject },
      { path: "create", name: "Create", component: FormProject },
      { path: ":id/edit", name: "Edit", component: FormProject, props: true },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
