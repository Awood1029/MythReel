import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth";
import styled from "styled-components";

const RegisterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const RegisterForm = styled.form`
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

function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		console.log("Form data:", { username, email, password }); // Debug log
		if (!password) {
			setError("Password cannot be empty");
			return;
		}
		try {
			await register(username, email, password);
			navigate("/login");
		} catch (error) {
			setError(
				error.response?.data || "Registration failed. Please try again."
			);
		}
	};

	return (
		<RegisterContainer>
			<RegisterForm onSubmit={handleSubmit}>
				<h2>Register</h2>
				{error && <ErrorMessage>{error}</ErrorMessage>}
				<Input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<Input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<Button type="submit">Register</Button>
			</RegisterForm>
		</RegisterContainer>
	);
}

export default Register;
