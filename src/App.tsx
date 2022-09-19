import React from "react";
import {
	HashRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";
import Layout from './components/Layout';


export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/tags" element={<Tags/>}></Route>

				<Route path="/money" element={<Money/>}></Route>

				<Route path="/statistics" element={<Statistics/>}></Route>

				<Route path="/" element={<Navigate replace to="/money"/>}/>

				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</Router>
	);
}

function Tags() {
	return (
		<Layout>
			<h1>标签页面</h1>
		</Layout>
	);
}

function Money() {
	return (
		<Layout>
			<h1>记账页面</h1>
		</Layout>
	);
}

function Statistics() {
	return (
		<Layout>
			<h1>统计页面</h1>
		</Layout>
	);
}

function NotFound() {
	return (
		<div>
			页面不存在，请检查网页地址是否正确！
		</div>
	);
}