<template>
  <RouterLink :to="{ name: 'about-course', params: {courseId: course?.id }}">
    <article class="w-full h-full bg-indigo-50 flex flex-col gap-4 justify-between p-6 rounded-2xl border-2 border-indigo-100 cursor-pointer duration-200 hover:scale-[101%] hover:shadow-2xl">
      <div class="w-full flex flex-col gap-4">
        <CourseTitle :title="course?.title"/>
        <CourseVideoPreview :previewImageLink="course?.previewImageLink"
                            :videoLink="course?.meta?.courseVideoPreview?.link"
        />
        <CourseDescription :description="course?.description"/>
        <SkillsList :skills="course?.meta?.skills"/>
      </div>
      <div class="w-full flex items-center justify-between">
        <LessonsAmount :lessonsCount="course?.lessonsCount"/>
        <RatingComponent :rating="course?.rating"/>
      </div>
    </article>
  </RouterLink>
</template>

<script setup>
import CourseVideoPreview from "@/components/courses/CourseVideoPreview.vue";
import CourseTitle from "@/components/common/CourseTitle.vue";
import CourseDescription from "@/components/common/CourseDescription.vue";
import SkillsList from "@/components/common/SkillsList.vue";
import LessonsAmount from "@/components/common/LessonsAmount.vue";
import RatingComponent from "@/components/common/RatingComponent.vue";

const props = defineProps({
  course: {
    type: Object,
    required: true,
  }
})

</script>

<style scoped>

</style>