<script setup>
defineProps({
  videoId: String,
});
</script>

<script>
export default {
  name: "VideoEmbed",
};
</script>

<template>
  <iframe
    class="w-auto h-auto"
    :src="'https://www.youtube.com/embed/' + videoId"
    title="Youtube Video Player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    :allowfullscreen="true"
  ></iframe>
</template>
