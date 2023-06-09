import { shallowMount, VueWrapper } from "@vue/test-utils";
import { expect, describe, it, beforeEach, afterEach, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";

import { useCourseDetailsStore } from "@/stores";
import LessonInfo from "@/components/course-details/LessonInfo.vue";
import DurationComponent from "@/components/course-details/DurationComponent.vue";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon.vue";
import LockedIcon from "@/components/icons/LockedIcon.vue";
import ChevronUpIcon from "@/components/icons/ChevronUpIcon.vue";
import LessonVideo from "@/components/course-details/LessonVideo.vue";
import type { Lesson } from "@/types/lesson";
import type { CourseDetailsState } from "@/types/courseDetailsState";
import type { ComponentPublicInstance } from "vue";

describe('LessonComponent', () => {
  let wrapper: VueWrapper<ComponentPublicInstance<{}>>;
  let lesson: Lesson;
  let number: number;
  let courseDetailsStore: CourseDetailsState;

  beforeEach(() => {
    lesson = {
      id: '1',
      title: 'Lesson 1',
      duration: 1500,
      order: 1,
      previewImageLink: 'https://photo.com/preview.jpg',
      link: 'https://video.com/video.mp4',
      status: 'unlocked',
    } as Lesson;
    number = 1;
    setActivePinia(createPinia());
    courseDetailsStore = useCourseDetailsStore();
    // @ts-expect-error
    vi.spyOn(courseDetailsStore, 'getLessonState').mockReturnValue(true);
    wrapper = shallowMount(LessonInfo, {
      props: { lesson, number },
      global: {
        components: {
          DurationComponent,
          ChevronDownIcon,
          LockedIcon,
          LessonVideo,
          ChevronUpIcon,
        },
        mocks: {
          $store: courseDetailsStore,
        },
      },
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
    wrapper.unmount();
  });

  it('renders the lesson title', () => {
    expect(wrapper.find('.col-span-6').text()).toContain(lesson.title);
  });

  it('renders the lesson duration', () => {
    expect(wrapper.findComponent(DurationComponent).props('duration')).toBe(lesson.duration);
  });

  it('renders the ChevronUpIcon when lesson state is open', async () => {
    // @ts-expect-error
    vi.spyOn(courseDetailsStore, 'getLessonState').mockReturnValue(true);
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(ChevronUpIcon).exists()).toBe(true);
  });
});