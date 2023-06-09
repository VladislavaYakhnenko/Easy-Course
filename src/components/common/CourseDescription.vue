<template>
  <p class="font-montserrat font-normal text-gray-700 dark:text-indigo-100 max-lg:text-sm max-md:text-xs">
    {{ description }}
  </p>
</template>

<script setup lang="ts">
interface Props {
  description: string
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>