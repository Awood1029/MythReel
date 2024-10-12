import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./layouts/Sidebar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Creators from "./pages/Creators";
import Profile from "./pages/Profile";
import VideoUploadForm from "./components/VideoUploadForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import backgroundImage from "./assets/images/tmpBackground.png";

const AppContainer = styled.div`
	display: flex;
	min-height: 100vh;
	position: relative;

	&::before {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				0deg,
				rgba(0, 0, 0, 0.31) 0%,
				rgba(0, 0, 0, 0.31) 100%
			),
			url(${backgroundImage}) lightgray 50% / cover no-repeat;
		filter: blur(6px);
		z-index: -1;
	}
`;

const MainContent = styled.div`
	flex: 1;
	margin-left: 250px; // This should match the width of the Sidebar
	padding: 20px;
	overflow-y: auto;
	position: relative;
	z-index: 1;
`;

function App() {
	return (
		<AuthProvider>
			<Router>
				<AppContainer>
					<Sidebar />
					<MainContent>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/discover" element={<Discover />} />
							<Route path="/creators" element={<Creators />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/upload" element={<VideoUploadForm />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
						</Routes>
					</MainContent>
				</AppContainer>
			</Router>
		</AuthProvider>
	);
}

export default App;
