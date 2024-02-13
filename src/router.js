import { createRouter, createWebHistory } from "vue-router";
// setup routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/HomeView.vue"),
  },
  {
    path: "/users",
    name: "Users List",
    component: () => import("./views/UsersListView.vue"),
  },
  {
    path: "/user/:id",
    name: "User",
    props: true,
    component: () => import("./views/UserView.vue"),
  },
  {
    path: "/crime-events",
    name: "Crime Events",
    component: () => import("./views/CrimeEventsView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("./views/ContactView.vue"),
  },
];
// insert routes
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
