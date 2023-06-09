<template>
  <div
      class="rounded-2xl shadow-md ring-white dark:ring-gray-400 ring-2 overflow-hidden w-full aspect-video"
      @mouseover="playVideo(videoRef)"
      @mouseleave="pauseVideo(videoRef)"
  >
    <video
        class="w-full h-full object-cover"
        ref="videoRef"
        loop
        :poster="previewImageLink + '/cover.webp'"
        preload="none"
        muted
    />
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {
  createPlayer,
  pauseVideo,
  playVideo
} from "@/helpers/video_player";

const videoRef = ref();

interface Props {
  previewImageLink: string,
  videoLink: string
}

const props = defineProps<Props>();

onMounted(() => {
  createPlayer(videoRef.value, props.videoLink)
});

</script>

<style scoped>

</style>