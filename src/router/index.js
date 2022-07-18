import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetails from "../views/MovieDetailsView.vue";

const routes = [
  {
    name: "HomeView",
    path: "/",
    component: HomeView,
  },
  {
    name: "MovieDetailsView",
    path: "/movie/:id",
    component: MovieDetails,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
