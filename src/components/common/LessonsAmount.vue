<template>
  <span class="font-montserrat font-semibold text-gray-500 dark:text-gray-300 max-xl:text-sm">
      {{ lessonsCount }} lessons
  </span>
</template>

<script setup lang="ts">
interface Props {
  lessonsCount: number
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>