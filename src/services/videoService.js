import api from "./apiService";

export const uploadVideo = async (file, coverImage, userId) => {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("coverImage", coverImage);
	formData.append("userId", userId);

	const response = await api.post("/videos/upload", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
};

export const getVideos = async () => {
	const response = await api.get("/videos");
	return response.data;
};

export const getVideoById = async (id) => {
	const response = await api.get(`/videos/${id}`);
	return response.data;
};
