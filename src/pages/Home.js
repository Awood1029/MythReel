import React, { useState, useEffect } from "react";
import { getVideos } from "../services/video";
import "../styles/Home.css";
import VideoModal from "../components/VideoModal";

function Home() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const fetchedVideos = await getVideos();
				setVideos(fetchedVideos);
			} catch (err) {
				console.error("Failed to fetch videos", err);
				setError("Failed to fetch videos. Please try again later.");
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

	if (error) {
		return <div className="error">{error}</div>;
	}

	return (
		<div className="home">
			<div className="video-feed">
				{videos.map((video) => (
					<div
						key={video.id}
						className="video-card"
						onClick={() => openModal(video)}
					>
						<img
							src={`http://localhost:8080${video.coverImage}`}
							alt={video.title}
							className="video-cover"
						/>
						<h2>{video.title}</h2>
						<p>By: {video.user.username}</p>
					</div>
				))}
			</div>
			{selectedVideo && (
				<VideoModal video={selectedVideo} onClose={closeModal} />
			)}
		</div>
	);
}

export default Home;
