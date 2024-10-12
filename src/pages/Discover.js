import React, { useState, useEffect } from "react";
import { getVideos } from "../services/video";
import "../styles/Discover.css";
import VideoModal from "../components/VideoModal";

function Discover() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const fetchedVideos = await getVideos();
				setVideos(fetchedVideos);
			} catch (err) {
				console.error("Failed to fetch videos", err);
			}
		};
		fetchVideos();
	}, []);

	const openModal = (video) => {
		setSelectedVideo(video);
	};

	const closeModal = () => {
		setSelectedVideo(null);
	};

	return (
		<div className="discover-content">
			<h1 className="discover-title">Discover Fantasy Videos</h1>
			<div className="image-gallery">
				{videos.map((video) => (
					<div
						key={video.id}
						className="image-card"
						onClick={() => openModal(video)}
					>
						<img
							src={`http://localhost:8080${video.coverImage}`}
							alt={video.title}
							className="video-cover"
						/>
						<div className="image-overlay">
							<p>{video.title}</p>
							<p>By: {video.user.username}</p>
						</div>
					</div>
				))}
			</div>
			{selectedVideo && (
				<VideoModal video={selectedVideo} onClose={closeModal} />
			)}
		</div>
	);
}

export default Discover;
