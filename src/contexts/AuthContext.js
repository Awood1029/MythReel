import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setCurrentUser(JSON.parse(storedUser));
		}
	}, []);

	const login = async (username, password) => {
		try {
			const response = await api.post("/auth/login", { username, password });
			setCurrentUser(response.data.user);
			localStorage.setItem("user", JSON.stringify(response.data.user));
			localStorage.setItem("token", response.data.token);
			return true;
		} catch (error) {
			console.error("Login failed:", error);
			return false;
		}
	};

	const logout = () => {
		setCurrentUser(null);
		localStorage.removeItem("user");
		localStorage.removeItem("token");
	};

	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
