import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const HeaderContainer = styled.header`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: rgba(248, 249, 250, 0.9);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	z-index: 1000;
`;

const Logo = styled.img`
	max-width: 200px;
	width: 100%;
	height: auto;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Logo src={logo} alt="Logo" />
		</HeaderContainer>
	);
};

export default Header;
