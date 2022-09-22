import {useTags} from '../useTags';
import React from 'react';
import {useParams} from 'react-router-dom';

type Params = {
	id:string
}

const Tag: React.FC = () => {
	const {findTag} = useTags();
	let {id} = useParams<Params>();
	const tag = findTag(parseInt(id!));
	return (
		<div>{tag.name}</div>
	);
};
export {Tag};