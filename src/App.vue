<script setup>
import VimovNavBar from "./components/VimovNavBar.vue";
import VimovFooter from "./components/VimovFooter.vue";
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
  <router-view></router-view>
  <VimovFooter />
</template>
