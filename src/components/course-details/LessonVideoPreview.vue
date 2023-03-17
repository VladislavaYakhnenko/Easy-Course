<template>
  <video
      ref="videoRef"
      controls
      preload="metadata"
      class="rounded-2xl shadow-md ring-white ring-2"
      @click="playVideo"
  />
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
  order: {
    type: Number,
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

onMounted(() => {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(props.videoLink);
    hls.attachMedia(videoRef.value);
    // hls.on(Hls.Events.MANIFEST_PARSED, () => {
    //   videoRef.value.play();
    // });
  } else if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
    videoRef.value.src = props.videoLink;
    // videoRef.value.addEventListener('loadedmetadata', () => {
    //   videoRef.value.play();
    // });
  }
});
</script>

<style scoped>

</style>