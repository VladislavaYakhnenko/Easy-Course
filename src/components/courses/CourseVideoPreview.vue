<template>
  <div
      class="rounded-2xl shadow-md ring-white ring-2 overflow-hidden w-full aspect-video"
      @mouseover="playVideo"
      @mouseleave="pauseVideo"
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

<script setup>
import {onMounted, ref} from "vue";
import Hls from "hls.js/dist/hls.min";

const videoRef = ref(null);

const props = defineProps({
  previewImageLink: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  }
})

const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play();
  }
};

const pauseVideo = () => {
  if (videoRef.value) {
    videoRef.value.pause();
  }
};

onMounted(() => {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(props.videoLink);
    hls.attachMedia(videoRef.value);
  } else if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
    videoRef.value.src = props.videoLink;
  }
});

</script>

<style scoped>

</style>