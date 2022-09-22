import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';

function Tags() {
	const {tags, setTags} = useTags();
	return (
		<Layout>
			<h1>标签页面</h1>
		</Layout>
	);
}

export default Tags;