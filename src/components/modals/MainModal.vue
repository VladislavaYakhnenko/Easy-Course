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

<script setup>
import CloseIcon from "@/components/icons/CloseIcon.vue";
import LockedLessonModal from "@/components/modals/LockedLessonModal.vue";
import {useCourseDetailsStore} from "@/stores";

const courseDetailsStore = useCourseDetailsStore();

</script>

<style scoped>

</style>