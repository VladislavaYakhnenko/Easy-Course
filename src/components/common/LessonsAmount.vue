<template>
  <span class="font-montserrat font-semibold text-gray-500 max-xl:text-sm">
      {{ lessonsCount }} lessons
  </span>
</template>

<script setup>
const props = defineProps({
  lessonsCount: {
    type: Number,
    required: true,
  }
})
</script>

<style scoped>

</style>