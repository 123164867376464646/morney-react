import React from "react";
import {
	HashRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
export default function App() {
	return (
		<Router>
			<Wrapper>
				<Main>
					<Routes>
						<Route path="/tags" element={<Tags/>}></Route>

						<Route path="/money" element={<Money/>}></Route>

						<Route path="/statistics" element={<Statistics/>}></Route>

						<Route path="/" element={<Navigate replace to="/money"/>}/>

						<Route path="*" element={<NotFound/>}/>
					</Routes>
				</Main>
				<Nav />
			</Wrapper>
		</Router>
	);
}

function Tags() {
	return <h2>标签页面</h2>;
}

function Money() {
	return <h2>记账页面</h2>;
}

function Statistics() {
	return <h2>统计页面</h2>;
}

function NotFound() {
	return (
		<div>
			页面不存在，请检查网页地址是否正确！
		</div>
	);
}