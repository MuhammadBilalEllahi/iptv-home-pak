import Hls from "hls.js";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const VideoWithHLS = ({ src }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const hls = new Hls({ debug: true });

        if (Hls.isSupported() && videoRef.current) {
            hls.loadSource(src);
            hls.attachMedia(videoRef.current);
            hls.on(Hls.Events.ERROR, (event, data) => {
                console.error('HLS error:', data);
            });

            // hls.liveSyncPosition(0)
            // hls.allAudioTracks()
        } else if (videoRef.current && videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            videoRef.current.src = src;
        }

        return () => {
            hls.destroy();
        };
    }, [src]);

    return (
        <video
            ref={videoRef}
            controls
            autoPlay
            className="hls-video"
        />
    );
};

export default VideoWithHLS;
