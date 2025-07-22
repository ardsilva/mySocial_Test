// Header.js
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Nav = styled.div`
	background-color: #fafafa;
`;

const NavHeader = styled.div`
	padding: 26px 20px;
	display: flex;
	align-items: center;
	margin: 0 auto;

	@media (max-width: 767px) {
		width: 100%;
	}
`;

const NavLeft = styled.div`
	width: 33.333%;
	text-align: left;
	font-weight: bold;
	font-size: x-large;
	cursor: pointer;
`;

const NavCenter = styled.div`
	width: 33.333%;
	text-align: center;
`;

const Input = styled.input`
	max-width: 100%;
	font-size: 16px;
	border: solid 1px #dbdbdb;
	border-radius: 3px;
	color: #262626;
	padding: 7px 33px;
	border-radius: 3px;
	color: #999;
	cursor: text;
	font-weight: 300;
	text-align: center;
	background: #fafafa;
	&:active,
	&:focus {
		text-align: left;
	}
`;

function Header({ search }) {
	const history = useHistory();
	return (
		<Nav>
			<NavHeader>
				<NavLeft onClick={() => history.push('/')}>MySocial</NavLeft>
				<NavCenter>
					<Input
						type="text"
						placeholder="search"
						onChange={(e) => search(e.target.value)}
					/>
				</NavCenter>
			</NavHeader>
		</Nav>
	);
}
export default Header;
