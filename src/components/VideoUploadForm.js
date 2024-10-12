import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { uploadVideo } from "../services/videoService";

const UploadContainer = styled.div`
	padding: 20px;
	color: white;
`;

const UploadForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 400px;
`;

const Input = styled.input`
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

function VideoUploadForm() {
	const [file, setFile] = useState(null);
	const [coverImage, setCoverImage] = useState(null);
	const navigate = useNavigate();
	const { currentUser } = useAuth();

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleCoverImageChange = (e) => {
		setCoverImage(e.target.files[0]);
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		if (!currentUser) {
			console.error("No user logged in");
			return;
		}
		if (!file || !coverImage) {
			console.error("Both video and cover image must be selected");
			return;
		}

		try {
			await uploadVideo(file, coverImage, currentUser.id);
			navigate("/");
		} catch (error) {
			console.error("Upload failed:", error);
		}
	};

	return (
		<UploadContainer>
			<h2>Upload Video</h2>
			<UploadForm onSubmit={handleUpload}>
				<div>
					<label>Select Video:</label>
					<Input
						type="file"
						onChange={handleFileChange}
						accept="video/*"
						required
					/>
				</div>
				<div>
					<label>Select Cover Image:</label>
					<Input
						type="file"
						onChange={handleCoverImageChange}
						accept="image/*"
						required
					/>
				</div>
				<Button type="submit">Upload</Button>
			</UploadForm>
		</UploadContainer>
	);
}

export default VideoUploadForm;
