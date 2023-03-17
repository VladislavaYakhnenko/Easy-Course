<template>
  <div class="w-full flex flex-col gap-6 p-6 shadow-lg bg-indigo-50 border-2 border-indigo-100 rounded-2xl max-md:p-3 max-md:gap-3">
    <div class="w-full border-b border-gray-300 pb-6 last:pb-0 last:border-0  max-md:pb-3"
         v-for="(lesson, index) in lessons"
         :key="lesson?.id"
    >
      <LessonInfo :lesson="lesson"
                  :number="index + 1"
      />
    </div>
  </div>
</template>

<script setup>
import LessonInfo from "@/components/course-details/LessonInfo.vue";

const props = defineProps({
  lessons: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>

</style>