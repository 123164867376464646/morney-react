import React from "react";
import {
	HashRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";
import Tags from './views/Label';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NotFound from './views/NotFound';
import styled from 'styled-components';
import {Tag} from './views/Tag';

const AppWrapper = styled.div`
  color: #333;
`;

export default function App() {
	return (
		<AppWrapper>
			<Router>
				<Routes>
					<Route path="/tags" element={<Tags/>}></Route>

					<Route path='/tags/:id' element={<Tag/>}></Route>

					<Route path="/money" element={<Money/>}></Route>

					<Route path="/statistics" element={<Statistics/>}></Route>

					<Route path="/" element={<Navigate replace to="/money"/>}/>

					<Route path="*" element={<NotFound/>}/>
				</Routes>
			</Router>
		</AppWrapper>
	);
}