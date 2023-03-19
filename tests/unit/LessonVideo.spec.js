import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import LessonVideo from '@/components/course-details/LessonVideo.vue'

describe('LessonVideo', () => {
    const id = '1'
    const previewImageLink = ''
    const order = 2
    const videoLink = ''

    it('renders the component', () => {
        const wrapper = mount(LessonVideo, {
            props: {
                id,
                previewImageLink,
                order,
                videoLink,
            },
        })

        expect(wrapper.exists()).toBe(true)
    })

    it('saves progress to local storage on timeupdate', async () => {
        const wrapper = mount(LessonVideo, {
            props: {
                id,
                previewImageLink,
                order,
                videoLink,
            },
        })

        const video = wrapper.find('video')
        video.element.currentTime = 10

        await video.trigger('timeupdate')

        expect(localStorage.getItem(`video_${id}_progress`)).toBe('10')
    })
})