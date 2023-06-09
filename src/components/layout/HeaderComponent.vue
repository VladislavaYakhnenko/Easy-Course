<template>
  <div class="w-full bg-indigo-600 dark:bg-indigo-400 px-8 py-2 shadow-lg flex items-center justify-between max-md:px-8 max-xxs:px-4">
    <div @click="themeStore.toggleTheme()">
      <MoonIcon
        v-if="!themeStore.isDarkMode"
        class="w-6 h-6 cursor-pointer text-white hover:text-neutral-200 duration-300"
      />
      <SunIcon
        v-else
        class="w-8 h-8 cursor-pointer text-neutral-900 hover:text-neutral-700 duration-300"
      />
    </div>
    <RouterLink to="/">
      <h1 class="font-montserrat text-2xl text-white dark:text-neutral-900 font-semibold">
        Easy Course
      </h1>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { SunIcon } from "@heroicons/vue/24/solid";
import { MoonIcon } from "@heroicons/vue/24/solid";
import { useThemeStore } from "@/stores";

const themeStore = useThemeStore();
</script>

<style scoped>

</style>