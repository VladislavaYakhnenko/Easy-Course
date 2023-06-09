import { shallowMount } from '@vue/test-utils';
import { expect, describe, it } from 'vitest';
import SkillsList from "@/components/common/SkillsList.vue";

describe('SkillsList', () => {
  it('renders the list of skills', () => {
    const skills = ['Skill 1', 'Skill 2', 'Skill 3'];
    const wrapper = shallowMount(SkillsList, { props: { skills } });
    const skillList = wrapper.find('div > div');
    expect(skillList.exists()).toBe(true);
    expect(skillList.findAll('li')).toHaveLength(skills.length);
  });
});