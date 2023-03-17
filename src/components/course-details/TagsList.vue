<template>
  <div class="flex flex-wrap gap-4"
       v-if="tags.length"
  >
    <div v-for="tag in tags"
         :key="tag"
    >
      <span class="font-montserrat text-indigo-600 text-normal max-lg:text-sm max-md:text-xs">
        # {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: false,
    default: () => []
  }
})
</script>

<style scoped>

</style>