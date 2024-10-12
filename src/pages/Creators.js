import React from "react";
import styled from "styled-components";
import UserCard from "../components/UserCard";

const CreatorsPage = styled.div`
	padding: 20px;
`;

const CreatorsTitle = styled.h1`
	color: white;
	text-align: center;
	margin-bottom: 30px;
`;

const CreatorGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
`;

function Creators() {
	const creators = Array.from({ length: 12 }, (_, i) => ({
		id: i + 1,
		name: `Creator ${i + 1}`,
		bio: `Passionate creator specializing in fantasy content. Join me on this magical journey!`,
		profileImage: `https://randomuser.me/api/portraits/men/${i + 1}.jpg`,
		coverImage: `https://picsum.photos/seed/${i + 1}/300/400`,
	}));

	return (
		<CreatorsPage>
			<CreatorsTitle>Discover Creators</CreatorsTitle>
			<CreatorGrid>
				{creators.map((creator) => (
					<UserCard key={creator.id} user={creator} />
				))}
			</CreatorGrid>
		</CreatorsPage>
	);
}

export default Creators;
