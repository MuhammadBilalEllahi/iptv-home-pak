/* eslint-disable react/prop-types */

import VideoWithHLS from "./VideoWithHLS";


const VideoPlayer = ({ channel }) => {
    return (
        <div className="video-player">
            {channel ? (
                <div>
                    <h3>{channel.name}</h3>
                    <VideoWithHLS src={channel.link} />
                </div>
            ) : (
                <p>Select a channel to play</p>
            )}
        </div>
    );
};

export default VideoPlayer;
