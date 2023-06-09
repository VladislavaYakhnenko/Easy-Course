import { shallowMount, VueWrapper } from "@vue/test-utils";
import { expect, describe, it, beforeEach, vi } from "vitest";
import type { ComponentPublicInstance } from "vue";
import { createPinia, setActivePinia } from "pinia";
import { useCourseDetailsStore } from "@/stores";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import LockedLessonModal from "@/components/modals/LockedLessonModal.vue";
import MainModal from "@/components/modals/MainModal.vue";

describe('MainModal', () => {
  let wrapper: VueWrapper<ComponentPublicInstance<{}>>;

  beforeEach(() => {
    setActivePinia(createPinia());

    const courseDetailsStore = useCourseDetailsStore();
    vi.spyOn(courseDetailsStore, 'closeModal').mockReturnValue();

    wrapper = shallowMount(MainModal, {
      global: {
        components: {
          CloseIcon,
          LockedLessonModal
        }
      }
    });
  });

  it('closes the modal on escape key press', async () => {
    const courseDetailsStore = useCourseDetailsStore();

    await wrapper.vm.$nextTick();
    const escapeKey = new KeyboardEvent('keydown', { key: 'Escape' });
    window.dispatchEvent(escapeKey);

    expect(courseDetailsStore.closeModal).toHaveBeenCalled();
  });

  it('closes the modal on close icon click', async () => {
    const closeIcon = wrapper.findComponent({ name: 'CloseIcon' });

    await closeIcon.trigger('click');

    const courseDetailsStore = useCourseDetailsStore();
    expect(courseDetailsStore.closeModal).toHaveBeenCalled();
  });
});