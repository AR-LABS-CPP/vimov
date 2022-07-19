<script setup>
import VimovNavBar from "./components/VimovNavBar.vue";
import VimovFooter from "./components/VimovFooter.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<script>
export default {
  name: "App",
  components: {
    VimovNavBar,
    VimovFooter,
  },
};
</script>

<template>
  <VimovNavBar />
  <router-view :key="route.fullPath"></router-view>
  <VimovFooter />
</template>
