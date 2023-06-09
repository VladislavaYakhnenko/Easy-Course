<template>
  <div class="flex items-center gap-1.5">
    <span class="font-montserrat font-semibold text-gray-500 dark:text-gray-300 text-xl max-lg:text-lg max-md:text-base">
      {{ formattedRating }}
    </span>
    <StarIcon/>
  </div>
</template>

<script setup lang="ts">
import StarIcon from "@/components/icons/StarIcon.vue";
import {computed} from "vue";

interface Props {
  rating: number
}

const props = defineProps<Props>();

const formattedRating = computed((): string => {
  return props.rating?.toFixed(1);
})
</script>

<style scoped>

</style>