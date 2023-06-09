<template>
  <div class="w-full flex flex-col gap-6 p-6 shadow-lg bg-indigo-50 dark:bg-neutral-700 border-2 border-indigo-100 dark:border-gray-400 rounded-2xl max-md:p-3 max-md:gap-3">
    <div class="w-full border-b border-gray-300 dark:border-gray-400 pb-6 last:pb-0 last:border-0  max-md:pb-3"
         v-for="(lesson, index) in lessons"
         :key="lesson?.id"
    >
      <LessonInfo :lesson="lesson"
                  :number="index + 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LessonInfo from "@/components/course-details/LessonInfo.vue";
import {Lesson} from "@/types/lesson";

interface Props {
  lessons: Lesson[],
}

const props = defineProps<Props>();
</script>

<style scoped>

</style>