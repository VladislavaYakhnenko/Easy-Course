import { shallowMount } from '@vue/test-utils';
import { expect, describe, it } from 'vitest';
import CourseTitle from "@/components/common/CourseTitle.vue";

describe('CourseTitle', () => {
  it('renders the title prop', () => {
    const title = 'Title';
    const wrapper = shallowMount(CourseTitle, { props: { title } });
    const h2 = wrapper.find('h2');
    expect(h2.text()).toBe(title);
  });
});