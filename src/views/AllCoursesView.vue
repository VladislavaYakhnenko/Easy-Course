<template>
  <div class="w-full">
    <div
        v-if="coursesStore.loading"
        class="w-full flex items-center justify-center h-[90vh]"
    >
      <LoaderSpinner/>
    </div>
    <div
        v-else
        class="w-full flex flex-col gap-10 items-center px-14 py-8 max-lg:px-6"
    >
      <div class="w-full grid grid-cols-2 grid-flow-row gap-8 z-0 max-xs:grid-cols-1">
        <CourseCard
            v-for="course in coursesStore.getCoursesPerPage"
            :key="course?.id"
            :course="course"
        />
      </div>
      <PaginationPanel/>
    </div>
  </div>
</template>

<script setup lang="ts">
import CourseCard from "@/components/courses/CourseCard.vue";
import LoaderSpinner from "@/components/ui/LoaderSpinner.vue";
import {useCoursesStore} from "@/stores";
import PaginationPanel from "@/components/ui/PaginationPanel.vue";

const coursesStore = useCoursesStore();
</script>

<style scoped>

</style>