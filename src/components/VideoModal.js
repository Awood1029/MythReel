import React from "react";
import styled from "styled-components";
import CommentSection from "./CommentSection";

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const ModalContent = styled.div`
	background-color: #1a1a1a;
	border-radius: 8px;
	width: 80%;
	height: 80%;
	display: flex;
	overflow: hidden;
`;

const VideoContainer = styled.div`
	flex: 2;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Video = styled.video`
	max-width: 100%;
	max-height: 100%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 20px;
	overflow-y: auto;
	color: white;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	color: white;
	font-size: 24px;
	cursor: pointer;
`;

const VideoModal = ({ video, onClose }) => {
	return (
		<ModalOverlay>
			<ModalContent>
				<CloseButton onClick={onClose}>&times;</CloseButton>
				<VideoContainer>
					<Video src={video.url} controls />
				</VideoContainer>
				<InfoContainer>
					<h2>{video.title}</h2>
					<p>Uploaded by: {video.user.username}</p>
					<CommentSection />
				</InfoContainer>
			</ModalContent>
		</ModalOverlay>
	);
};

export default VideoModal;
