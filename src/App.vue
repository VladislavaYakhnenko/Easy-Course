<template>
  <div class="w-full min-h-screen relative flex flex-col items-center justify-between">
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

<script setup>
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import {useCoursesStore} from "@/stores";
import {onMounted} from "vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";

const courseStore = useCoursesStore();

onMounted(() => {
  courseStore.fetchCourses();
})
</script>

<style scoped>

</style>
