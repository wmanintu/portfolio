import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";

// Vue.use(Router)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/project",
      name: "project",
      component: Project,
    },
    {
      path: "/:pathMatch(.*)*",
      component: Home,
    },
  ],
});

export default router;
