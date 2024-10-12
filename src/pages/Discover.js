import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getVideos } from "../services/videoService";
import VideoModal from "../components/VideoModal";

const DiscoverContainer = styled.div`
	padding: 20px;
`;

const DiscoverTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;
	text-align: center;
	margin-bottom: 30px;
	color: #ffffff;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ImageGallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 25px;
	justify-content: center;
`;

const ImageCard = styled.div`
	position: relative;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease-in-out;
	background-color: rgba(255, 255, 255, 0.1);
	aspect-ratio: 3 / 4;
	cursor: pointer;

	&:hover {
		transform: translateY(-5px);
	}
`;

const VideoCover = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ImageOverlay = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.7);
	padding: 10px;
	color: white;
`;

function Discover() {
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

	if (error) return <div>{error}</div>;

	return (
		<DiscoverContainer>
			<DiscoverTitle>Discover Fantasy Videos</DiscoverTitle>
			<ImageGallery>
				{videos.map((video) => (
					<ImageCard key={video.id} onClick={() => openModal(video)}>
						<VideoCover
							src={`http://localhost:8080${video.coverImage}`}
							alt={video.title}
						/>
						<ImageOverlay>
							<p>{video.title}</p>
							<p>By: {video.user?.username || "Unknown"}</p>
						</ImageOverlay>
					</ImageCard>
				))}
			</ImageGallery>
			{selectedVideo && (
				<VideoModal video={selectedVideo} onClose={closeModal} />
			)}
		</DiscoverContainer>
	);
}

export default Discover;
