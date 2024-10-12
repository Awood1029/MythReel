import React from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
	margin-top: 20px;
`;

const CommentHeader = styled.h3`
	color: white;
	margin-bottom: 10px;
`;

const CommentList = styled.ul`
	list-style-type: none;
	padding: 0;
`;

const CommentItem = styled.li`
	display: flex;
	align-items: flex-start;
	margin-bottom: 15px;
`;

const CommentAvatar = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	margin-right: 10px;
`;

const CommentContent = styled.div`
	flex: 1;
`;

const CommentUsername = styled.span`
	font-weight: bold;
	color: #4caf50;
	margin-right: 10px;
`;

const CommentText = styled.p`
	color: white;
	margin: 0;
`;

const fakeComments = [
	{
		id: 1,
		username: "user1",
		avatar: "https://randomuser.me/api/portraits/men/1.jpg",
		text: "Great video! Love the fantasy elements.",
	},
	{
		id: 2,
		username: "user2",
		avatar: "https://randomuser.me/api/portraits/women/2.jpg",
		text: "The special effects are amazing!",
	},
	{
		id: 3,
		username: "user3",
		avatar: "https://randomuser.me/api/portraits/men/3.jpg",
		text: "Can't wait to see more content like this.",
	},
];

const CommentSection = () => {
	return (
		<CommentContainer>
			<CommentHeader>Comments</CommentHeader>
			<CommentList>
				{fakeComments.map((comment) => (
					<CommentItem key={comment.id}>
						<CommentAvatar src={comment.avatar} alt={comment.username} />
						<CommentContent>
							<CommentUsername>{comment.username}</CommentUsername>
							<CommentText>{comment.text}</CommentText>
						</CommentContent>
					</CommentItem>
				))}
			</CommentList>
		</CommentContainer>
	);
};

export default CommentSection;
