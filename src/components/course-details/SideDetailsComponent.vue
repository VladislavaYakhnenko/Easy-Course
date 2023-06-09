<template>
  <div class="w-full p-6 shadow-lg bg-indigo-50 dark:bg-neutral-700 border-2 border-indigo-100 dark:border-gray-400 rounded-2xl flex flex-col gap-6 relative max-md:gap-3 max-md:p-3">
    <div class="px-3 py-1 bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-gray-300 dark:to-indigo-400 max-w-fit absolute top-4 left-0 rounded-r-2xl">
      <div class="flex items-center gap-1">
        <LockedIcon
            v-if="course?.containsLockedLessons"
            class="h-3 w-3 text-white hover:text-indigo-50 cursor-default dark:text-neutral-900 dark:hover:text-neutral-700"
        />
        <UnlockedIcon
          class="dark:text-neutral-900 dark:hover:text-neutral-700"
          v-else
        />
        <span class="font-montserrat font-semibold text-sm text-white dark:text-neutral-900 max-md:text-xs">
          {{ course?.containsLockedLessons ? 'Locked lessons' : 'All lessons unlocked'}}
        </span>
      </div>
    </div>
    <div class="w-full pb-6 border-b border-gray-300 mt-8 max-md:pb-3">
      <CourseTitle :title="course?.title"/>
    </div>
    <CourseDescription :description="course?.description"/>
    <div class="w-full pb-6 border-b border-gray-300 max-md:pb-3">
      <SkillsList :skills="course?.meta?.skills"/>
    </div>
    <div class="w-full flex flex-col gap-1">
      <div class="w-full flex items-center gap-2">
        <span class="font-montserrat font-semibold text-gray-600 dark:text-indigo-100 max-lg:text-sm max-md:text-xs">
          Totally:
        </span>
        <DurationComponent :duration="course?.duration"/>
      </div>
      <TagsList :tags="course?.tags"/>
    </div>
    <div class="w-full flex justify-between items-center">
      <LessonsAmount :lessonsCount="course?.lessons?.length"/>
      <RatingComponent :rating="course?.rating"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import CourseTitle from "@/components/common/CourseTitle.vue";
import CourseDescription from "@/components/common/CourseDescription.vue";
import SkillsList from "@/components/common/SkillsList.vue";
import RatingComponent from "@/components/common/RatingComponent.vue";
import LessonsAmount from "@/components/common/LessonsAmount.vue";
import TagsList from "@/components/course-details/TagsList.vue";
import DurationComponent from "@/components/course-details/DurationComponent.vue";
import LockedIcon from "@/components/icons/LockedIcon.vue";
import UnlockedIcon from "@/components/icons/UnlockedIcon.vue";
import type {Course} from "@/types/course";

interface Props {
  course: Course,
}

const props = defineProps<Props>();
</script>

<style scoped>

</style>