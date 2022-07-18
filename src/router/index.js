import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetails from "../views/MovieDetailsView.vue";
import MovieVideos from "../views/MovieVideosView.vue";
import MovieImages from "../views/MovieImagesView.vue";
import MovieCast from "../views/MovieCastView.vue";
import SearchMovie from "../views/SearchMovieView.vue";

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
  {
    name: "MovieVideosView",
    path: "/movie/:id/videos",
    component: MovieVideos,
  },
  {
    name: "MovieImagesView",
    path: "/movie/:id/images",
    component: MovieImages,
  },
  {
    name: "MovieCastView",
    path: "/movie/:id/cast",
    component: MovieCast,
  },
  {
    name: "SearchMovieView",
    path: "/search/:id",
    component: SearchMovie,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
