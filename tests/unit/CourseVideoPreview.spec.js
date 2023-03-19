import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import CourseVideoPreview from "@/components/courses/CourseVideoPreview.vue";

describe('CourseVideoPreview', () => {
    const previewImageLink = '';
    const videoLink = '';

    it('renders the component', () => {
        const wrapper = mount(CourseVideoPreview, {
            props: {
                previewImageLink,
                videoLink,
            },
        });

        expect(wrapper.exists()).toBe(true);
    });

    it('loads the video source', () => {
        const wrapper = mount(CourseVideoPreview, {
            props: {
                previewImageLink,
                videoLink,
            },
        });

        const video = wrapper.find('video').element;
        expect(video.src).toBe(videoLink);
    });

    it('plays the video on mouseover', async () => {
        const wrapper = mount(CourseVideoPreview, {
            props: {
                previewImageLink,
                videoLink,
            },
        });

        const video = wrapper.find('video').element;
        video.play = vi.fn();
        video.pause = vi.fn();

        await wrapper.trigger('mouseover');
        expect(video.play).toHaveBeenCalledTimes(1);

        await wrapper.trigger('mouseleave');
        expect(video.pause).toHaveBeenCalledTimes(1);
    });
});