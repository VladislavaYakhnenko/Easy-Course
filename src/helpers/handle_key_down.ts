import type { VideoPlayback } from "@/types/videoPlayback";
import { KeyCode } from "@/types/keyCodes";

abstract class Playback {
    abstract newPlaybackRate(video: VideoPlayback): void;
}

class PlaybackSlow extends Playback {
    newPlaybackRate(video: VideoPlayback): void {
        video.playbackRate -= 0.5;
    }
}

class PlaybackFast extends Playback {
    newPlaybackRate(video: VideoPlayback): void {
        video.playbackRate += 0.5;
    }
}

class PlaybackNormal extends Playback {
    newPlaybackRate(video: VideoPlayback): void {
        video.playbackRate = 1;
    }
}

const handleKeyDown = (event: KeyboardEvent, video: VideoPlayback): void => {
    let playback: Playback | null = null;

    switch (event.code) {
        case KeyCode.KeyA:
            playback = new PlaybackSlow();
            break;
        case KeyCode.KeyD:
            playback = new PlaybackFast();
            break;
        case KeyCode.KeyW:
            playback = new PlaybackNormal();
            break;
        default:
            break;
    }

    if (playback) {
        playback.newPlaybackRate(video);
    }
};

export default handleKeyDown;