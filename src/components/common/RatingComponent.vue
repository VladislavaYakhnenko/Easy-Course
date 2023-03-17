<template>
  <div class="flex items-center gap-1.5">
    <span class="font-montserrat font-semibold text-gray-500 text-xl max-lg:text-lg max-md:text-base">
      {{ getRating }}
    </span>
    <StarIcon/>
  </div>
</template>

<script setup>
import StarIcon from "@/components/icons/StarIcon.vue";
import {computed} from "vue";

const props = defineProps({
  rating: {
    type: Number,
    required: true,
  }
})

const getRating = computed(() => {
  return Number.isInteger(props.rating) ? props.rating + '.0' : props.rating;
})
</script>

<style scoped>

</style>