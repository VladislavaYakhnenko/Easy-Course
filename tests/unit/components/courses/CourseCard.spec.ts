import { shallowMount } from '@vue/test-utils';
import { expect, describe, it } from 'vitest';
import { RouterLink } from "vue-router";
import CourseCard from "@/components/courses/CourseCard.vue";
import CourseTitle from "@/components/common/CourseTitle.vue";
import CourseVideoPreview from "@/components/courses/CourseVideoPreview.vue";
import CourseDescription from "@/components/common/CourseDescription.vue";
import SkillsList from "@/components/common/SkillsList.vue";
import LessonsAmount from "@/components/common/LessonsAmount.vue";
import RatingComponent from "@/components/common/RatingComponent.vue";

const mockCourse = {
  id: "1",
  title: "Test Course",
  previewImageLink: "https://photo.com/image.png",
  description: "Test Course Description",
  lessonsCount: 5,
  rating: 4,
  meta: {
    skills: ["JavaScript", "Vue.js"],
    courseVideoPreview: {
      link: "https://video.com/video.mp4"
    }
  }
};

describe("CoursePreview", () => {
  it("renders the course preview", () => {
    const wrapper = shallowMount(CourseCard, {
      props: { course: mockCourse },
      global: {
        components: {
          RouterLink,
          CourseTitle,
          CourseVideoPreview,
          CourseDescription,
          SkillsList,
          LessonsAmount,
          RatingComponent
        }
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});