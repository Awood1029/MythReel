import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	background-color: ${(props) => (props.following ? "#1a1a1a" : "#4caf50")};
	color: white;
	border: none;
	padding: 8px 16px;
	border-radius: 20px;
	font-weight: bold;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${(props) => (props.following ? "#2a2a2a" : "#45a049")};
	}
`;

const FollowButton = ({ userId, initialFollowState }) => {
	const [following, setFollowing] = useState(initialFollowState);

	const handleFollow = async () => {
		try {
			// TODO: Implement API call to follow/unfollow user
			// const response = await api.post(`/users/${userId}/follow`);
			setFollowing(!following);
		} catch (error) {
			console.error("Failed to follow/unfollow user", error);
		}
	};

	return (
		<StyledButton onClick={handleFollow} following={following}>
			{following ? "Following" : "Follow"}
		</StyledButton>
	);
};

export default FollowButton;
