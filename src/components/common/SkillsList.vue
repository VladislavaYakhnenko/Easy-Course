<template>
  <div class="w-full flex flex-col gap-3 font-montserrat">
    <span class="font-semibold text-gray-700 text-xl max-xl:text-base max-md:text-sm">
      Skills:
    </span>
    <ul v-if="skills.length">
      <div
          class="flex items-center gap-2"
          v-for="skill in skills"
          :key="skill"
      >
        <div class="w-2 h-2 rounded-full bg-indigo-600 max-lg:w-1 max-lg:h-1"/>
        <li class="font-normal text-gray-700 max-lg:text-sm max-md:text-xs">
          {{ skill }}
        </li>
      </div>
    </ul>
    <span
        v-else
        class="font-normal text-gray-700"
    >
      No additional skills
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  skills: {
    type: Array,
    required: false,
    default: () => [],
  }
})
</script>

<style scoped>

</style>