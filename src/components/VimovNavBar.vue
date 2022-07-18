<script>
export default {
  name: "VimovNavBar",
};
</script>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const searchText = ref("");

const handleSearchMovie = () => {
  router.replace({ path: `/search/${searchText.value}` });
  searchText.value = "";
};
</script>

<template>
  <header>
    <nav class="flex justify-between items-center bg-black p-[20px]">
      <router-link to="/">
        <p class="text-3xl text-white font-bold">
          <span class="text-3xl font-bold text-green-600">Vi</span>mov
        </p>
      </router-link>
      <form @submit.prevent="handleSearchMovie" class="mr-6">
        <input
          v-model="searchText"
          @input="(event) => (searchText = event.target.value)"
          type="text"
          placeholder="Search Movie"
          class="overflow-hidden rounded-lg px-16 py-2 text-center outline-0"
        />
      </form>
    </nav>
  </header>
</template>
