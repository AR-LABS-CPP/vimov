<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const images = ref({});

const route = useRoute();

onMounted(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/${route.params.id}/images?api_key=b7eb5d6ae450dbb282fdd02fb5157611`
  )
    .then((res) => res.json())
    .then((data) => {
      images.value = data.backdrops;
    });
});
</script>

<template>
  <div class="p-5 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
    <template v-for="image in images">
      <img
        :src="'https://image.tmdb.org/t/p/w780' + image.file_path"
        class="border-2"
      />
    </template>
  </div>
</template>
