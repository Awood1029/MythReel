import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";

const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
	padding: 20px;
`;

const FollowersList = ({ users }) => {
	return (
		<ListContainer>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</ListContainer>
	);
};

export default FollowersList;
