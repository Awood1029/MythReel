import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCurrentUser, updateUser } from "../services/userService";

const EditProfileContainer = styled.div`
	padding: 20px;
	color: white;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 400px;
`;

const Input = styled.input`
	margin-bottom: 10px;
	padding: 5px;
`;

const TextArea = styled.textarea`
	margin-bottom: 10px;
	padding: 5px;
`;

const Button = styled.button`
	padding: 10px;
	background-color: #4caf50;
	color: white;
	border: none;
	cursor: pointer;
`;

function EditProfile() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUser = async () => {
			const currentUser = await getCurrentUser();
			setUser(currentUser);
		};
		fetchUser();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateUser(user.id, user);
		navigate(`/profile/${user.id}`);
	};

	if (!user) return <div>Loading...</div>;

	return (
		<EditProfileContainer>
			<h2>Edit Profile</h2>
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					value={user.username}
					onChange={(e) => setUser({ ...user, username: e.target.value })}
					placeholder="Username"
				/>
				<Input
					type="email"
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					placeholder="Email"
				/>
				<TextArea
					value={user.bio}
					onChange={(e) => setUser({ ...user, bio: e.target.value })}
					placeholder="Bio"
				/>
				<Button type="submit">Save Changes</Button>
			</Form>
		</EditProfileContainer>
	);
}

export default EditProfile;
