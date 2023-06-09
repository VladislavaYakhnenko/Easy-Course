import { shallowMount } from '@vue/test-utils';
import { expect, describe, it } from 'vitest';
import RatingComponent from "@/components/common/RatingComponent.vue";

describe('RatingComponent', () => {
  it('renders the rating prop as a formatted string', () => {
    const rating = 4.5;
    const wrapper = shallowMount(RatingComponent, { props: { rating } });
    const formattedRating = wrapper.find('span').text();
    expect(formattedRating).toBe('4.5');
  });
});