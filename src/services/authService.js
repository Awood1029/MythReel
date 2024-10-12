import api from "./apiService";

export const login = async (username, password) => {
	const response = await api.post("/auth/login", { username, password });
	if (response.data.token) {
		localStorage.setItem("token", response.data.token);
		localStorage.setItem("user", JSON.stringify(response.data.user));
	}
	return response.data;
};

export const register = async (username, email, password) => {
	try {
		const response = await api.post("/auth/register", {
			username,
			email,
			password,
		});
		if (response.data.token) {
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("user", JSON.stringify(response.data.user));
		}
		return response.data;
	} catch (error) {
		console.error("Registration error:", error.response?.data);
		throw error.response?.data || error.message;
	}
};

export const logout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
};

export const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("user"));
};
