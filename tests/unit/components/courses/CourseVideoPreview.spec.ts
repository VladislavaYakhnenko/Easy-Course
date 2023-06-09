import { shallowMount, VueWrapper } from "@vue/test-utils";
import { expect, describe, it, beforeEach, afterEach, vi } from "vitest";
import type { ComponentPublicInstance } from "vue";
import { createPlayer, pauseVideo, playVideo } from '@/helpers/video_player';
import CourseVideoPreview from "@/components/courses/CourseVideoPreview.vue";

vi.mock('@/helpers/video_player');

describe('VideoPreview', () => {
  let wrapper: VueWrapper<ComponentPublicInstance<{}>>;

  const previewImageLink = 'https://preview-image.com';
  const videoLink = 'https://video.com';

  beforeEach(() => {
    wrapper = shallowMount(CourseVideoPreview, {
      props: {
        previewImageLink,
        videoLink,
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
    vi.resetAllMocks();
  });

  it('renders a video element', () => {
    expect(wrapper.find('video').exists()).toBe(true);
  });

  it('sets the poster attribute of the video element to the preview image', () => {
    expect(wrapper.find('video').attributes('poster')).toBe(`${previewImageLink}/cover.webp`);
  });

  it('calls createPlayer function on mounted', () => {
    expect(createPlayer).toHaveBeenCalledWith(wrapper.vm.$refs.videoRef, videoLink);
  });

  it('calls playVideo function on mouseover', () => {
    wrapper.find('div').trigger('mouseover');
    expect(playVideo).toHaveBeenCalledWith(wrapper.vm.$refs.videoRef);
  });

  it('calls pauseVideo function on mouseleave', () => {
    wrapper.find('div').trigger('mouseleave');
    expect(pauseVideo).toHaveBeenCalledWith(wrapper.vm.$refs.videoRef);
  });
});