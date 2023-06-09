<template>
  <MainModal v-if="courseDetailsStore.showModal"/>
  <div class="w-full">
    <div
        v-if="courseDetailsStore.loading"
        class="w-full flex items-center justify-center h-[90vh]"
    >
      <LoaderSpinner/>
    </div>
    <div v-else>
      <div class="w-full grid grid-cols-12 gap-8 px-14 py-8 max-xl:px-10 max-xl:gap-4 max-lg:px-4 max-lg:gap-3">
        <article class="col-span-12 max-xs:block hidden">
          <SideDetailsComponent :course="courseDetailsStore.course"/>
        </article>
        <article class="col-span-8 max-xs:col-span-12">
          <LessonsList :lessons="courseDetailsStore.course.lessons"/>
        </article>
        <article class="col-span-4 max-xs:hidden">
          <SideDetailsComponent :course="courseDetailsStore.course"/>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCourseDetailsStore} from "@/stores";
import LoaderSpinner from "@/components/ui/LoaderSpinner.vue";
import SideDetailsComponent from "@/components/course-details/SideDetailsComponent.vue";
import LessonsList from "@/components/course-details/LessonsList.vue";
import MainModal from "@/components/modals/MainModal.vue";
import {onMounted} from "vue";

const courseDetailsStore = useCourseDetailsStore();

interface Props {
  courseId: string
}

const props = defineProps<Props>()

onMounted(() => {
  courseDetailsStore.getCourseDetails(props.courseId);
})
</script>

<style scoped>

</style>