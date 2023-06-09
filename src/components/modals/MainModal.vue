<template>
  <div class="w-screen h-screen fixed top-0 left-0 z-50 bg-gray-700 bg-opacity-60 flex items-center justify-center">
    <div class="bg-white p-6 rounded-2xl relative">
      <div class="absolute right-4 top-4">
        <CloseIcon @click="courseDetailsStore.closeModal()"/>
      </div>
      <LockedLessonModal/>
      </div>
    </div>
</template>

<script setup lang="ts">
import CloseIcon from "@/components/icons/CloseIcon.vue";
import LockedLessonModal from "@/components/modals/LockedLessonModal.vue";
import {useCourseDetailsStore} from "@/stores";
import {onMounted, onUnmounted} from "vue";

const courseDetailsStore = useCourseDetailsStore();

const handleEscapeKey = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') {
    courseDetailsStore.closeModal()
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscapeKey);
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscapeKey);
});

</script>

<style scoped>

</style>