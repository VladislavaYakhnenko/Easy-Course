<template>
  <h2 class="font-montserrat font-semibold text-gray-800 text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg">
    {{ title }}
  </h2>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  }
})

</script>

<style scoped>

</style>