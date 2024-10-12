import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
`;

const VideoCard = styled.div`
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	overflow: hidden;
`;

const VideoThumbnail = styled.img`
	width: 100%;
	height: 150px;
	object-fit: cover;
`;

const VideoInfo = styled.div`
	padding: 10px;
`;

const VideoTitle = styled.h3`
	margin: 0;
	font-size: 16px;
	color: white;
`;

function VideoGrid({ videos }) {
	console.log("Videos in Grid:", videos); // Log the videos prop
	return (
		<Grid>
			{videos.map((video) => (
				<Link to={`/video/${video.id}`} key={video.id}>
					<VideoCard>
						<VideoThumbnail src={video.coverImage} alt={video.title} />
						<VideoInfo>
							<VideoTitle>{video.title}</VideoTitle>
						</VideoInfo>
					</VideoCard>
				</Link>
			))}
		</Grid>
	);
}

export default VideoGrid;
