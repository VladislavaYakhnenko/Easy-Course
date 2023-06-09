<template>
  <div
      class="rounded-2xl shadow-md ring-white dark:ring-gray-400 ring-2 overflow-hidden w-full aspect-video relative"
      @mouseleave="showActions = false"
      @mouseover="showActions = true"
  >
   <span
       :class="[showActions ? 'opacity-100' : 'opacity-0', 'duration-200 z-10 absolute top-2 right-4 text-indigo-600 max-w-fit px-2 py-0.5 rounded-2xl text-xs font-semibold font-montserrat bg-white bg-opacity-50 max-xs:hidden']">
     Tap "D" to increase the speed, "A" - to decrease on 0.5x, "W" - go back to 1x
   </span>
    <button
        :class="[showActions ? 'opacity-100' : 'opacity-0', 'duration-200 z-10 absolute top-2 left-4 p-1 rounded-2xl bg-white bg-opacity-50']"
        :disabled="!showActions"
        @click="togglePiP(pictureInPictureWindow, videoRef)"
    >
      <GoToPipIcon/>
    </button>
    <video
        class="w-full h-full object-cover focus-visible:outline-0"
        ref="videoRef"
        controls
        preload="metadata"
        @timeupdate="saveVideoProgress(id, videoRef)"
    />
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import GoToPipIcon from "@/components/icons/GoToPipIcon.vue";
import handleKeyDown from "@/helpers/handle_key_down";
import {
  createPlayer,
  getVideoProgress,
  saveVideoProgress,
  togglePiP
} from "@/helpers/video_player";

const videoRef = ref();
const pictureInPictureWindow = ref(null);
let showActions = ref(false);

interface Props {
  id: string,
  previewImageLink: string,
  videoLink: string,
  order: number

}

const props = defineProps<Props>();

onMounted(() => {
  const progress = getVideoProgress(props.id);
  if (progress) {
    videoRef.value.currentTime = progress;
  }

  createPlayer(videoRef.value, props.videoLink)

  window.addEventListener('keydown', (event) => {
    handleKeyDown(event, videoRef.value);
  });
});
</script>

<style scoped>

</style>
