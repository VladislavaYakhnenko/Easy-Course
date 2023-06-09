<template>
  <div class="w-full min-h-screen relative flex flex-col items-center justify-between dark:bg-neutral-900">
    <header class="w-full fixed top-0 z-40">
      <HeaderComponent/>
    </header>
    <main class="w-full mt-14 mb-10 max-w-[1440px]">
      <RouterView/>
    </main>
    <footer class="w-full">
      <FooterComponent/>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import { useCoursesStore, useThemeStore } from "@/stores";
import {onMounted} from "vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";

const courseStore = useCoursesStore();
const themeStore = useThemeStore();

onMounted(() => {
  courseStore.fetchCourses();
  themeStore.setTheme();
})
</script>

<style scoped>

</style>
