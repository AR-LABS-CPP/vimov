<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const movieDetails = ref({});
const imageIsLoaded = ref(false);

onMounted(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=b7eb5d6ae450dbb282fdd02fb5157611&include_adult=false`
  )
    .then((res) => res.json())
    .then((data) => {
      movieDetails.value = data;
    });
});

const imageLoaded = () => {
  imageIsLoaded.value = true;
};
</script>

<template>
  <div
    class="p-5 text-white text-center w-full h-full flex flex-col md:flex-row lg:flex-row"
  >
    <img
      :src="'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path"
      class="object-cover rounded-xl"
      @load="imageLoaded"
    />
    <div class="p-5 flex flex-col justify-center items-center">
      <p class="my-5 text-4xl font-bold">{{ movieDetails.title }}</p>
      <p class="text-xl">{{ movieDetails.overview }}</p>

      <div class="my-6 grid grid-cols-3 gap-3">
        <router-link :to="'/movie/' + movieDetails.id + '/videos'" class="btn"
          >Videos</router-link
        >
        <router-link :to="'/movie/' + movieDetails.id + '/images'" class="btn"
          >Images</router-link
        >
        <router-link :to="'/movie/' + movieDetails.id + '/cast'" class="btn"
          >Cast</router-link
        >
      </div>
    </div>
  </div>
</template>

<style>
.btn {
  @apply bg-green-600 border-2 border-green-900 px-10 py-3 rounded shadow text-xl hover:bg-green-800;
}
</style>
