import { shallowMount, VueWrapper } from "@vue/test-utils";
import { expect, describe, it, beforeEach, afterEach } from "vitest";
import type { ComponentPublicInstance } from "vue";
import TagsList from "@/components/course-details/TagsList.vue";

describe('TagList', () => {
  let wrapper: VueWrapper<ComponentPublicInstance<{}>>;

  beforeEach(() => {
    wrapper = shallowMount(TagsList, {
      props: { tags: ['tag1', 'tag2', 'tag3'] },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders tags when passed in as props', () => {
    const tags = wrapper.findAll('span');
    expect(tags).toHaveLength(3);
    expect(tags[0].text()).toContain('# tag1');
    expect(tags[1].text()).toContain('# tag2');
    expect(tags[2].text()).toContain('# tag3');
  });

  it('does not render tag list when tags prop is empty', () => {
    wrapper.setProps({ tags: [] });
    expect(wrapper.find('span').exists()).toBe(true);
  });
});