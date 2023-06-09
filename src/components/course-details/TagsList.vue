<template>
  <div class="flex flex-wrap gap-4"
       v-if="tags?.length"
  >
    <div v-for="tag in tags"
         :key="tag"
    >
      <span class="font-montserrat text-indigo-600 dark:text-indigo-400 text-normal max-lg:text-sm max-md:text-xs">
        # {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  tags?: string[],
}

const props = defineProps<Props>();
</script>

<style scoped>

</style>