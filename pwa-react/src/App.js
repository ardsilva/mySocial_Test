// App.js
import React, { Fragment } from 'react';
import styled from 'styled-components';
import Friends from './components/Friends/Friends';
import GlobalStyle from './theme/globalStyle';
// import history from './utils/history';
import Social from './components/Social/Social';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppWrapper = styled.div`
	background-color: #fafafa;
`;

function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<AppWrapper>
				<Router>
					<Switch>
						<Route
							path="/"
							exact
							component={Social}
						/>
						<Route
							path="/friends"
							component={Friends}
						/>
					</Switch>
				</Router>
			</AppWrapper>
		</Fragment>
	);
}
export default App;
