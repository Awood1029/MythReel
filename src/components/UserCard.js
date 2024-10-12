import React from "react";
import styled from "styled-components";

const Card = styled.div`
	width: 100%;
	aspect-ratio: 3 / 4;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.1);
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: translateY(-5px);
	}
`;

const BlurredBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-image: url(${(props) => props.coverImage});
	background-size: cover;
	background-position: center;
	filter: blur(8px);
	z-index: 1;
`;

const ContentWrapper = styled.div`
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	text-align: center;
`;

const UserIcon = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	margin-bottom: 15px;
	border: 3px solid white;
`;

const UserName = styled.h3`
	margin: 0 0 10px 0;
	color: white;
	font-size: 1.2em;
`;

const UserBio = styled.p`
	color: rgba(255, 255, 255, 0.8);
	font-size: 0.9em;
	margin: 0;
`;

const UserCard = ({ user }) => {
	return (
		<Card>
			<BlurredBackground coverImage={user.coverImage} />
			<ContentWrapper>
				<UserIcon src={user.profileImage} alt={user.name} />
				<UserName>{user.name}</UserName>
				<UserBio>{user.bio}</UserBio>
			</ContentWrapper>
		</Card>
	);
};

export default UserCard;
