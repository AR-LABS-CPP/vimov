<script>
export default {
  name: "VimovNavBar",
};
</script>

<template>
  <header>
    <nav class="flex justify-between bg-black p-[20px]">
      <router-link to="/">
        <p class="text-3xl text-white font-bold">
          <span class="text-3xl font-bold text-green-600">Vi</span>mov
        </p>
      </router-link>
      <input
        type="text"
        placeholder="Search Movie"
        class="mr-6 rounded-lg overflow-hidden text-center px-16 outline-0"
      />
    </nav>
  </header>
</template>
