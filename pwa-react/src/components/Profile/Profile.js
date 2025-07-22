// Profile.js
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	border: 3px solid #787878;
	border-radius: 15px;
	justify-content: space-around;
	color: #787878;
	cursor: pointer;
	margin: 20px auto;
`;

const Content = styled.div`
	padding: 15px;
`;

const Image = styled.img`
	border: 3px solid;
	border-radius: 15px;
`;

const ContentImage = styled.div``;

const ContentDetails = styled.div``;

const Card = styled.div``;

const P = styled.p``;

function Profile({
	id,
	picture,
	name,
	age,
	eyeColor,
	company,
	email,
	profile,
}) {
	const history = useHistory();
	return (
		<Container
			onClick={() =>
				history.push({
					pathname: '/friends',
					data: profile,
				})
			}
		>
			<Content>
				<Card>
					<ContentImage>
						<Image
							alt={id}
							src={picture}
						/>
					</ContentImage>
					<ContentDetails>
						<P>
							{'Name: '}
							{name}
						</P>
						<P>
							{'Age: '}
							{age}
						</P>
						<P>
							{'EyeColor: '}
							{eyeColor}
						</P>
						<P>
							{'Company: '}
							{company}
						</P>
						<P>
							{'Email: '}
							{email}
						</P>
					</ContentDetails>
				</Card>
			</Content>
		</Container>
	);
}
export default Profile;
