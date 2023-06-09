import { shallowMount } from '@vue/test-utils';
import { expect, describe, it } from 'vitest';
import LessonsAmount from "@/components/common/LessonsAmount.vue";

describe('CourseDescription', () => {
  it('renders the description prop', () => {
    const lessonsCount = 3;
    const wrapper = shallowMount(LessonsAmount, { props: { lessonsCount } });
    const span = wrapper.find('span');
    expect(span.text()).toBe(lessonsCount + ' lessons');
  });
});