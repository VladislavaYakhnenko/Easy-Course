<template>
  <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
    <button
        class="relative inline-flex items-center rounded-l-md ring-1 ring-inset ring-gray-300 disabled:opacity-50 hover:bg-gray-100 duration-200"
        @click="prevPage"
        :disabled="coursesStore.currentPage <= 1"
    >
      <a href="#"
         class="px-2 py-2"
      >
        <span class="sr-only">
          Previous
        </span>
        <ChevronLeftIcon
            class="h-5 w-5"
            aria-hidden="true"
        />
      </a>
    </button>
    <span aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
      {{ coursesStore.currentPage }}
    </span>
    <button
        class="relative inline-flex items-center rounded-r-md ring-1 ring-inset ring-gray-300 disabled:opacity-50 hover:bg-gray-100 duration-200"
        @click="nextPage"
        :disabled="coursesStore.currentPage >= coursesStore.totalPages"
    >
      <a href="#"
         class="px-2 py-2"
      >
        <span class="sr-only">
          Next
        </span>
        <ChevronRightIcon
            class="h-5 w-5"
            aria-hidden="true"
        />
      </a>
    </button>
  </nav>
</template>

<script setup>
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon.vue";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon.vue";
import {useCoursesStore} from "@/stores";

const coursesStore = useCoursesStore();

const nextPage = () => {
  coursesStore.setCurrentPage(coursesStore.currentPage + 1);
}

const prevPage = () => {
  coursesStore.setCurrentPage(coursesStore.currentPage - 1);
}
</script>

<style scoped>

</style>