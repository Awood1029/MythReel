// src/components/Header.js
import React from "react";
import logo from "../images/logo.png"; // Adjust the path according to your project structure
import "../styles/Header.css"; // Import the CSS file for styling

const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="Logo" className="logo" />
		</header>
	);
};

export default Header;
