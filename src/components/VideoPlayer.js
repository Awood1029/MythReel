import React from "react";

function VideoPlayer({ src }) {
	return (
		<div className="video-player">
			<video src={src} controls width="100%" />
		</div>
	);
}

export default VideoPlayer;
