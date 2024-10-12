import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserById } from "../services/userService";
import VideoGrid from "../components/VideoGrid";
import { useAuth } from "../contexts/AuthContext";

const ProfileContainer = styled.div`
	padding: 20px;
	color: white;
`;

const ProfileHeader = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 20px;
`;

const ProfileInfo = styled.div``;

const EditButton = styled(Link)`
	background-color: #4caf50;
	border: none;
	color: white;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	border-radius: 4px;
`;

const ErrorMessage = styled.div`
	color: #ff6b6b;
	background-color: #2c2c2c;
	padding: 10px;
	border-radius: 4px;
	margin-bottom: 20px;
`;

function Profile() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { id } = useParams();
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userId = id || (currentUser && currentUser.id);
				if (!userId) {
					navigate("/login");
					return;
				}
				const userData = await getUserById(userId);
				console.log("Fetched User Data: ", userData); // Check if videos are present
				setUser(userData);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching user:", error);
				if (error.response && error.response.status === 404) {
					setError(
						"User not found. The profile you're looking for doesn't exist."
					);
				} else {
					setError("Failed to load user profile. Please try again later.");
				}
				setLoading(false);
			}
		};
		fetchUser();
	}, [id, currentUser, navigate]);

	if (loading) return <div>Loading...</div>;
	if (error) return <ErrorMessage>{error}</ErrorMessage>;
	if (!user) return <ErrorMessage>User not found</ErrorMessage>;

	return (
		<ProfileContainer>
			<ProfileHeader>
				<ProfilePicture
					src={user.profilePicture || "https://via.placeholder.com/100"}
					alt={user.username}
				/>
				<ProfileInfo>
					<h2>{user.username}</h2>
					<p>{user.bio}</p>
					{currentUser && currentUser.id === user.id && (
						<EditButton to="/edit-profile">Edit Profile</EditButton>
					)}
				</ProfileInfo>
			</ProfileHeader>
			<h3>Videos</h3>
			console.log("User Videos:", user.videos);
			<VideoGrid videos={user.videos || []} />
		</ProfileContainer>
	);
}

export default Profile;
