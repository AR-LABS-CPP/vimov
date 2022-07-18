<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const movieDetails = ref({});

onMounted(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/${route.params.id}?append_to_response=credits,videos,images&api_key=b7eb5d6ae450dbb282fdd02fb5157611`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      movieDetails.value = data;
    });
});
</script>

<template>
  <div
    class="p-5 text-white text-center w-full h-full flex flex-col md:flex-row lg:flex-row"
  >
    <img
      :src="'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path"
      class="object-cover rounded-xl"
    />
    <div class="p-5">
      <p class="my-5 text-4xl font-bold">{{ movieDetails.title }}</p>
      <p class="text-xl">{{ movieDetails.overview }}</p>

      <div class="my-3">
        <br />
        -- Put Images Here --
        <br />
        -- Put Cast Here --
      </div>
    </div>
  </div>
</template>
