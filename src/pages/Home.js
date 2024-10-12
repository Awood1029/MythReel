import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getVideos } from "../services/videoService";
import VideoModal from "../components/VideoModal";

const HomeContainer = styled.div`
	padding: 20px;
`;

const VideoFeed = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
`;

const VideoCard = styled.div`
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	transition: transform 0.3s ease;

	&:hover {
		transform: translateY(-5px);
	}
`;

const VideoCover = styled.img`
	width: 100%;
	aspect-ratio: 16 / 9;
	object-fit: cover;
`;

const VideoInfo = styled.div`
	padding: 10px;
`;

const VideoTitle = styled.h2`
	margin: 0;
	font-size: 1rem;
	color: white;
`;

const VideoAuthor = styled.p`
	margin: 5px 0 0;
	font-size: 0.8rem;
	color: #aaa;
`;

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
						<p>
							By:{" "}
							{video.user && video.user.username
								? video.user.username
								: "Unknown"}
						</p>
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
