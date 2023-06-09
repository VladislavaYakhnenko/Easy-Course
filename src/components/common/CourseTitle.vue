<template>
  <h2 class="font-montserrat font-semibold text-gray-800 dark:text-indigo-50 text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg">
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>