<template>
  <span class="font-montserrat font-semibold text-gray-500 whitespace-nowrap max-lg:text-sm">
    <span class="max-md:hidden max-xs:block max-xxs:hidden">
      {{ Math.floor(duration / 60) }} min {{ duration % 60 }} sec
    </span>
    <span class="hidden max-md:block max-xs:hidden">
      {{ Math.floor(duration / 60) }} : {{ duration % 60 }}
    </span>
  </span>
</template>

<script setup>
const props = defineProps({
  duration: {
    type: Number,
    required: true
  }
})

</script>

<style scoped>

</style>