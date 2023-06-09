import { shallowMount, VueWrapper } from "@vue/test-utils";
import { expect, describe, it, beforeEach, afterEach } from "vitest";
import type { ComponentPublicInstance } from "vue";
import LessonsList from "@/components/course-details/LessonsList.vue";
import LessonInfo from "@/components/course-details/LessonInfo.vue";
import type { Lesson } from "@/types/lesson";

describe('LessonsList', () => {
  let wrapper: VueWrapper<ComponentPublicInstance<{}>>;
  let lessons: Lesson[];

  beforeEach(() => {
    lessons = [
      {
        id: '1',
        title: 'Lesson 1',
        duration: 1500,
        order: 1,
        previewImageLink: 'https://photo.com/preview1.jpg',
        link: 'https://video.com/video1.mp4',
        status: 'unlocked',
      },
      {
        id: '2',
        title: 'Lesson 2',
        duration: 2000,
        order: 2,
        previewImageLink: 'https://photo.com/preview2.jpg',
        link: 'https://video.com/video2.mp4',
        status: 'unlocked',
      },
    ];
    wrapper = shallowMount(LessonsList, {
      props: { lessons },
      global: {
        components: {
          LessonInfo,
        },
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders a list of LessonInfo components', () => {
    const lessonInfoComponents = wrapper.findAllComponents(LessonInfo);
    expect(lessonInfoComponents).toHaveLength(lessons.length);
    for (let i = 0; i < lessons.length; i++) {
      expect(lessonInfoComponents[i].props('lesson')).toEqual(lessons[i]);
      expect(lessonInfoComponents[i].props('number')).toEqual(i + 1);
    }
  });
});