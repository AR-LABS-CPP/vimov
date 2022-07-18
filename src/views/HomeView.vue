<script setup>
import { onMounted, ref } from "vue";

const movies = ref([]);

onMounted(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=b7eb5d6ae450dbb282fdd02fb5157611&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => {
      movies.value = data.results;
    });
});
</script>

<script>
import MovieCard from "../components/MovieCard.vue";

export default {
  name: "HomeView",
  components: {
    MovieCard,
  },
};
</script>

<template>
  <header>
    <nav class="flex justify-between bg-black p-[20px]">
      <p class="text-3xl text-white font-bold">
        <span class="text-3xl font-bold text-green-600">Vi</span>mov
      </p>
      <input
        type="text"
        placeholder="Search Movie"
        class="mr-6 rounded-lg overflow-hidden text-center px-16 outline-0"
      />
    </nav>
  </header>

  <section class="m-5 grid place-items-center grid-cols-3 gap-5 lg:grid-cols-5">
    <div v-for="movie in movies" :key="movie.id" class="h-full">
      <router-link :to="'/movie/' + movie.id">
        <MovieCard
          :imageUrl="movie.poster_path"
          :movieTitle="movie.title"
          :year="movie.release_date"
        />
      </router-link>
    </div>
  </section>

  <footer class="p-[20px] text-center text-white font-bold text-lg bg-black">
    <p>Made By Aliraza</p>
  </footer>
</template>
