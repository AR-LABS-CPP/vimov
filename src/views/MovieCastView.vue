<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const cast = ref({});

onMounted(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/${route.params.id}/credits?api_key=b7eb5d6ae450dbb282fdd02fb5157611`
  )
    .then((res) => res.json())
    .then((data) => {
      cast.value = data.cast;
    });
});
</script>

<template>
  <div
    class="text-white p-5 grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <template v-for="actor in cast">
      <div class="rounded-md grid place-items-center p-3 m-3 bg-green-600">
        <template v-if="actor.profile_path != null">
          <img
            :src="'http://image.tmdb.org/t/p/w185' + actor.profile_path"
            class="border-2 rounded"
          />
        </template>
        <template v-else>
          <div
            class="text-black font-bold text-xl w-[189px] h-[282px] grid place-items-center"
          >
            <p>Image Not Found</p>
          </div>
        </template>
        <p class="m-2">{{ actor.name }}</p>
      </div>
    </template>
  </div>
</template>
