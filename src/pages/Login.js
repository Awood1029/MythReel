import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";

const AuthContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const AuthForm = styled.form`
	background-color: rgba(255, 255, 255, 0.1);
	padding: 2rem;
	border-radius: 8px;
	width: 100%;
	max-width: 400px;
`;

const Input = styled.input`
	width: 100%;
	padding: 0.75rem;
	margin-bottom: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.3);
	border-radius: 4px;
	background-color: rgba(255, 255, 255, 0.1);
	color: white;
`;

const Button = styled.button`
	width: 100%;
	padding: 0.75rem;
	background-color: #4caf50;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`;

const ErrorMessage = styled.p`
	color: red;
	margin-bottom: 1rem;
`;

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { login } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await login(username, password);
			navigate("/");
		} catch (error) {
			setError("Login failed. Please check your credentials.");
		}
	};

	return (
		<AuthContainer>
			<AuthForm onSubmit={handleSubmit}>
				<h2>Login</h2>
				{error && <ErrorMessage>{error}</ErrorMessage>}
				<Input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<Button type="submit">Log In</Button>
			</AuthForm>
		</AuthContainer>
	);
}

export default Login;
