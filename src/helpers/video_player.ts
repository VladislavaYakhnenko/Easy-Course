// @ts-ignore
import Hls from "hls.js/dist/hls.min";

export const createPlayer = (video: HTMLVideoElement, videoLink: string): void => {
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoLink);
        hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoLink;
    }
}

export const playVideo = (video: HTMLVideoElement): void => {
    if (video) {
        video.play();
    }
};

export const pauseVideo = (video: HTMLVideoElement): void => {
    if (video) {
        video.pause();
    }
};

export const saveVideoProgress = (id: string, video: HTMLVideoElement): void => {
    localStorage.setItem(`video_${id}_progress`, String(video.currentTime));
};

export const getVideoProgress = (id: string): string | null => {
    return localStorage.getItem(`video_${id}_progress`);
}

export const togglePiP = async (pipWindow: HTMLVideoElement | null, video: HTMLVideoElement): Promise<void> => {
    try {
        if (!pipWindow) {
            await video.requestPictureInPicture();
        } else {
            await pipWindow.requestPictureInPicture();
        }
        pipWindow = null;
    } catch (error) {
        console.error(error);
    }
};