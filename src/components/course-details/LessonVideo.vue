<template>
 <div class="rounded-2xl shadow-md ring-white ring-2 overflow-hidden w-full aspect-video relative"
      @mouseleave="showActions = false"
      @mouseover="showActions = true"
 >
   <span :class="[showActions ? 'opacity-100' : 'opacity-0', 'duration-200 z-10 absolute top-2 right-4 text-indigo-600 max-w-fit px-2 py-0.5 rounded-2xl text-xs font-semibold font-montserrat bg-white bg-opacity-50 max-xs:hidden']">
     Tap "D" to increase the speed, "A" - to decrease on 0.5x, "W" - go back to 1x
   </span>
   <button :class="[showActions ? 'opacity-100' : 'opacity-0', 'duration-200 z-10 absolute top-2 left-4 p-1 rounded-2xl bg-white bg-opacity-50']"
           :disabled="!showActions"
           @click="togglePictureInPicture"
   >
     <GoToPipIcon/>
   </button>
   <video
       class="w-full h-full object-cover focus-visible:outline-0"
       ref="videoRef"
       controls
       preload="metadata"
       @timeupdate="saveProgress"
   />
 </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Hls from "hls.js/dist/hls.min";
import GoToPipIcon from "@/components/icons/GoToPipIcon.vue";

const videoRef = ref(null);
const pictureInPictureWindow = ref(null);
const showActions = ref(null);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
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
const togglePictureInPicture = async () => {
  try {
    if (!pictureInPictureWindow.value) {
      pictureInPictureWindow.value = await videoRef.value.requestPictureInPicture();
    } else {
      await pictureInPictureWindow.value.exitPictureInPicture();
    }
    pictureInPictureWindow.value = null;
  } catch (error) {
    console.error(error);
  }
};

const saveProgress = () => {
  localStorage.setItem(`video_${props.id}_progress`, videoRef.value.currentTime);
};

const handleKeyDown = (event) => {
  const video = videoRef.value;

  switch (event.code) {
    case 'KeyA':
      video.playbackRate -= 0.5;
      break;
    case 'KeyD':
      video.playbackRate += 0.5;
      break;
    case 'KeyW':
      video.playbackRate = 1;
      break;
    default:
      break;
  }
};

onMounted(() => {
  const progress = localStorage.getItem(`video_${props.id}_progress`);
  if (progress) {
    videoRef.value.currentTime = progress;
  }

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(props.videoLink);
    hls.attachMedia(videoRef.value);
  } else if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
    videoRef.value.src = props.videoLink;
  }

  window.addEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>

</style>
