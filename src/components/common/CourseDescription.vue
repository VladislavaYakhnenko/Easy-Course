<template>
  <p class="font-montserrat font-normal text-gray-700 max-lg:text-sm max-md:text-xs">
    {{ description }}
  </p>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>

</style>