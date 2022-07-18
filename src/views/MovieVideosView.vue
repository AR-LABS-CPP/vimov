<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import VideoEmbed from "../components/VideoEmbed.vue";

const videos = ref({});

const route = useRoute();

onMounted(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/${route.params.id}/videos?api_key=b7eb5d6ae450dbb282fdd02fb5157611&language=en-US`
  )
    .then((res) => res.json())
    .then((data) => {
      videos.value = data.results;
    });
});
</script>

<template>
  <div
    class="p-5 w-full h-full grid gap-5 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
  >
    <template v-for="video in videos">
      <VideoEmbed :videoId="video.key" class="border-2 w-full aspect-video" />
    </template>
  </div>
</template>
