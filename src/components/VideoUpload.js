import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";

function VideoUpload() {
	const [file, setFile] = useState(null);
	const [coverImage, setCoverImage] = useState(null); // New state for cover image
	const navigate = useNavigate();
	const { currentUser } = useAuth();

	// Handle video file selection
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	// Handle cover image selection
	const handleCoverImageChange = (e) => {
		setCoverImage(e.target.files[0]);
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		if (!currentUser) {
			console.error("No user logged in");
			// Optionally redirect to login page or show an error message
			return;
		}
		if (!file || !coverImage) {
			console.error("Both video and cover image must be selected");
			return; // Ensure both video and cover image are selected
		}

		const formData = new FormData();
		formData.append("file", file);
		formData.append("coverImage", coverImage); // Append cover image to form data
		formData.append("userId", currentUser.id);

		try {
			const response = await api.post("/videos/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log(response.data);
			navigate("/");
		} catch (error) {
			console.error("Upload failed:", error);
		}
	};

	return (
		<div>
			<h2>Upload Video</h2>
			<form onSubmit={handleUpload}>
				<div>
					<label>Select Video:</label>
					<input
						type="file"
						onChange={handleFileChange}
						accept="video/*"
						required
					/>
				</div>
				<div>
					<label>Select Cover Image:</label>
					<input
						type="file"
						onChange={handleCoverImageChange}
						accept="image/*"
						required
					/>
				</div>
				<button type="submit">Upload</button>
			</form>
		</div>
	);
}

export default VideoUpload;
