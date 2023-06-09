import { shallowMount } from '@vue/test-utils';
import { expect, describe, it } from 'vitest';
import CourseDescription from "@/components/common/CourseDescription.vue";

describe('CourseDescription', () => {
  it('renders the description prop', () => {
    const description = 'Description';
    const wrapper = shallowMount(CourseDescription, { props: { description } });
    const p = wrapper.find('p');
    expect(p.text()).toBe(description);
  });
});