<template>
  <div class="w-full flex flex-col gap-6 max-md:gap-3">
    <div class="w-full grid grid-cols-12 gap-6 font-montserrat max-md:gap-3 max-xxs:gap-4">
      <span
        class="col-span-2 text-indigo-600 dark:text-indigo-400 font-semibold max-lg:text-sm flex items-center justify-center max-md:hidden">
        Lesson {{ number }}
      </span>
      <span
        class="hidden col-span-1 h-5 w-5 rounded-full bg-indigo-600 text-white text-sm max-md:flex justify-center items-center">
        {{ number }}
      </span>
      <span
        class="col-span-6 max-md:col-span-7 max-xxs:col-span-10 flex items-center font-semibold text-lg text-gray-700 dark:text-indigo-50 font-normal max-xl:text-base max-md:text-xs max-xs:text-base max-xxs:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
        {{ lesson?.title }}
      </span>
      <div class="col-span-3 flex items-center justify-center max-xxs:hidden">
        <DurationComponent :duration="lesson?.duration" />
      </div>
      <div class="col-span-1 flex items-center justify-end">
        <div v-if="lesson?.status === 'unlocked'">
          <ChevronDownIcon
            class="dark:text-indigo-400 dark:hover:text-gray-300"
            v-if="!courseDetailsStore.getLessonState(lesson?.id)"
            @click="courseDetailsStore.openLesson(lesson?.id)"
          />
          <ChevronUpIcon
            class="dark:text-indigo-400 dark:hover:text-gray-300"
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
    <LessonVideo
      v-if="courseDetailsStore.getLessonState(lesson?.id)"
      :id="lesson?.id"
      :order="lesson?.order"
      :previewImageLink="lesson?.previewImageLink"
      :videoLink="lesson?.link"
    />
  </div>
</template>

<script setup lang="ts">
import { useCourseDetailsStore } from "@/stores";
import DurationComponent from "@/components/course-details/DurationComponent.vue";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";
import LockedIcon from "@/components/icons/LockedIcon.vue";
import LessonVideo from "@/components/course-details/LessonVideo.vue";
import ChevronUpIcon from "@/components/icons/ChevronUpIcon.vue";
import type { Lesson } from "@/types/lesson";

interface Props {
  lesson: Lesson,
  number: number
}

const props = defineProps<Props>();

const courseDetailsStore = useCourseDetailsStore();
</script>

<style scoped>

</style>