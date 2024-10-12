import api from "./apiService";

export const getUserById = async (id) => {
	try {
		const response = await api.get(`/users/${id}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching user:", error);
		throw error;
	}
};

export const updateUser = async (id, userData) => {
	try {
		const response = await api.put(`/users/${id}`, userData);
		return response.data;
	} catch (error) {
		console.error("Error updating user:", error);
		throw error;
	}
};

export const getCurrentUser = () => {
	const userStr = localStorage.getItem("user");
	if (userStr) {
		return JSON.parse(userStr);
	}
	return null;
};
