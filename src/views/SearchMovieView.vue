<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MovieCard from "../components/MovieCard.vue";

const route = useRoute();

const movies = ref({});

onMounted(() => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=b7eb5d6ae450dbb282fdd02fb5157611&query=${route.params.id}&page=1&include_adult=false`
  )
    .then((res) => res.json())
    .then((data) => {
      movies.value = data.results;
    });
});
</script>

<template>
  <div class="text-3xl w-full p-5">
    <p class="text-white">Search Results for "{{ route.params.id }}"</p>
  </div>
  <section
    v-if="movies.length > 0"
    class="m-5 grid place-items-center grid-cols-3 gap-5 lg:grid-cols-5"
  >
    <div v-for="movie in movies" :key="movie.id" class="w-full h-full">
      <router-link :to="'/movie/' + movie.id">
        <MovieCard
          :imageUrl="movie.poster_path"
          :movieTitle="movie.title"
          :year="movie.release_date"
        />
      </router-link>
    </div>
  </section>
  <div v-else class="w-full h-screen flex justify-center items-center">
    <p class="text-white text-4xl">No Results</p>
  </div>
</template>
