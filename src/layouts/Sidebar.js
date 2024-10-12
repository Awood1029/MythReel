import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { useAuth } from "../contexts/AuthContext";

const SidebarContainer = styled.nav`
	width: 250px;
	height: 100vh;
	padding: 20px;
	border-radius: 30px;
	background: radial-gradient(
		50% 50% at 50% 50%,
		rgba(28, 35, 53, 0.2) 0%,
		rgba(40, 61, 119, 0.2) 100%
	);
	backdrop-filter: blur(10px);
	opacity: 0.57;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
`;

const Logo = styled.img`
	width: 150px;
	margin-bottom: 30px;
	display: block;
	margin-left: auto;
	margin-right: auto;
`;

const MenuList = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
`;

const MenuItem = styled.li`
	margin-bottom: 15px;
`;

const MenuLink = styled(Link)`
	display: block;
	padding: 10px 15px;
	text-decoration: none;
	color: #ffffff;
	border-radius: 28px;
	background: radial-gradient(150.45% 50% at 50% 50%, #11192a 0%, #1b2131 100%);
	transition: all 0.3s ease;

	&.active {
		background: radial-gradient(
			150.45% 50% at 50% 50%,
			#083f32 0%,
			#094236 100%
		);
	}

	&:hover {
		transform: translateX(5px);
	}
`;

const AuthButton = styled.button`
	width: 100%;
	padding: 10px 15px;
	border: none;
	border-radius: 28px;
	background: radial-gradient(150.45% 50% at 50% 50%, #11192a 0%, #1b2131 100%);
	color: #ffffff;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: translateX(5px);
	}
`;

function Sidebar() {
	const location = useLocation();
	const navigate = useNavigate();
	const { currentUser, logout } = useAuth();

	const handleAuthAction = () => {
		if (currentUser) {
			logout();
			navigate("/login");
		} else {
			navigate("/login");
		}
	};

	return (
		<SidebarContainer>
			<Logo src={logo} alt="Fantasy Video App" />
			<MenuList>
				<MenuItem>
					<MenuLink
						to="/"
						className={location.pathname === "/" ? "active" : ""}
					>
						Home
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						to="/discover"
						className={location.pathname === "/discover" ? "active" : ""}
					>
						Discover
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						to="/creators"
						className={location.pathname === "/creators" ? "active" : ""}
					>
						Creators
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						to="/profile"
						className={location.pathname === "/profile" ? "active" : ""}
					>
						Profile
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						to="/upload"
						className={location.pathname === "/upload" ? "active" : ""}
					>
						Upload
					</MenuLink>
				</MenuItem>
			</MenuList>
			<AuthButton onClick={handleAuthAction}>
				{currentUser ? "Logout" : "Login"}
			</AuthButton>
		</SidebarContainer>
	);
}

export default Sidebar;
