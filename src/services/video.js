import api from "./api";

export const uploadVideo = async (file, title) => {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("title", title);
	const response = await api.post("/videos", formData, {
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
