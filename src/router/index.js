import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/goal" },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/goal",
    name: "Goal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GoalView.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectsView.vue"),
    children: [
      {
        path: "portfolio",
        name: "PortfolioProject",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ProjectsView.vue"),
      },
      {
        path: "planning-web",
        name: "PlanningWebProject",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ProjectsView.vue"),
      },
      {
        path: "planning-android",
        name: "PlanningAndroidProject",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ProjectsView.vue"),
      },
      {
        path: "power-bi",
        name: "PowerBi",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ProjectsView.vue"),
      }
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/portfolio/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
