<script setup>
const props = defineProps({
  imageUrl: String,
  movieTitle: String,
  year: String,
});
</script>

<template>
  <div
    class="rounded-md flex flex-col h-full w-auto text-center object-cover bg-green-700 p-[10px] transition-transform ease duration-500 hover:scale-90 cursor-pointer"
  >
    <img
      :src="'https://image.tmdb.org/t/p/w500' + props.imageUrl"
      class="border-2"
    />
    <div class="h-full flex flex-col justify-center">
      <p class="text-white text-lg">{{ props.movieTitle }}</p>
      <p class="text-white text-xl">{{ props.year }}</p>
    </div>
  </div>
</template>
