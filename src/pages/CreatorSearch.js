import React from "react";
import "../styles/CreatorSearch.css";

function CreatorSearch() {
	const creators = Array.from({ length: 36 }, (_, i) => ({
		id: i + 1,
		name: `Creator ${i + 1}`,
		bio: `Short bio for Creator ${i + 1}`,
		photoUrl: `https://randomuser.me/api/portraits/men/${i + 1}.jpg`,
	}));

	return (
		<div className="creator-search">
			<h1>Creator Search</h1>
			<div className="creator-grid">
				{creators.map((creator) => (
					<div key={creator.id} className="creator-card">
						<img
							src={creator.photoUrl}
							alt={creator.name}
							className="creator-photo"
						/>
						<h2>{creator.name}</h2>
						<p>{creator.bio}</p>
						<a href={`/profile/${creator.id}`}>View Profile</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default CreatorSearch;
