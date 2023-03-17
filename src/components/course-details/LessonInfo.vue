<template>
  <div class="w-full flex flex-col gap-6 max-md:gap-3">
    <div class="w-full grid grid-cols-12 gap-6 font-montserrat max-md:gap-3 max-xxs:gap-4">
      <span class="col-span-2 text-indigo-600 font-semibold max-lg:text-sm flex items-center justify-center max-md:hidden">
        Lesson {{ number }}
      </span>
      <span class="hidden col-span-1 h-5 w-5 rounded-full bg-indigo-600 text-white text-sm max-md:flex justify-center items-center">
        {{ number }}
      </span>
      <span class="col-span-6 max-md:col-span-7 max-xxs:col-span-10 flex items-center font-semibold text-lg text-gray-700 font-normal max-xl:text-base max-md:text-xs max-xs:text-base max-xxs:text-sm whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
        {{ lesson?.title }}
      </span>
      <div class="col-span-3 flex items-center justify-center max-xxs:hidden">
        <DurationComponent :duration="lesson?.duration"/>
      </div>
      <div class="col-span-1 flex items-center justify-end">
        <div v-if="lesson?.status == 'unlocked'">
          <ChevronDownIcon
              v-if="!courseDetailsStore.getLessonState(lesson?.id)"
              @click="courseDetailsStore.openLesson(lesson?.id)"
          />
          <ChevronUpIcon
              v-else
              @click="courseDetailsStore.closeLesson(lesson?.id)"
          />
        </div>
        <LockedIcon
            v-else
            @click="courseDetailsStore.openModal()"
        />
      </div>
    </div>
    <LessonVideoPreview
        v-if="courseDetailsStore.getLessonState(lesson?.id)"
        :id="lesson?.id"
        :order="lesson?.order"
        :previewImageLink="lesson?.previewImageLink"
        :videoLink="lesson?.link"
    />
  </div>
</template>

<script setup>
import DurationComponent from "@/components/course-details/DurationComponent.vue";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";
import LockedIcon from "@/components/icons/LockedIcon.vue";
import {useCourseDetailsStore} from "@/stores";
import LessonVideoPreview from "@/components/course-details/LessonVideoPreview.vue";
import ChevronUpIcon from "@/components/icons/ChevronUpIcon.vue";

const props = defineProps({
  lesson: {
    type: Object,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  }
})

const courseDetailsStore = useCourseDetailsStore();

</script>

<style scoped>

</style>