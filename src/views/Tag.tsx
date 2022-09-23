import {useTags} from '../useTags';
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

type Params = {
	id: string
}
const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;

  > .emptyBox {
    width: 1em;
    height: 1em;
  }
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;
const Tag: React.FC = () => {
	const {findTag, updateTag, deleteTag} = useTags();
	let {id: idString} = useParams<Params>();
	const tag = findTag(parseInt(idString!));
	const tagContent = (tag: { id: number, name: string }) =>
		<div>
			<InputWrapper>
				<Input label="标签名" type="text" placeholder="标签名"
							 value={tag.name}
							 onChange={(e) => {
								 updateTag(tag.id, {name: e.target.value});
							 }}
				/>
			</InputWrapper>
			<Center>
				<Space/>
				<Space/>
				<Space/>
				<Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
			</Center>
		</div>;

	const history = useNavigate();
	const onClickBack = () => {
		history(-1);
	};

	return (
		<Layout>
			<TopBar>
				<Icon name="left" onClick={onClickBack}/>
				<span>编辑标签</span>
				<span className="emptyBox"></span>
			</TopBar>
			{tag ? tagContent(tag) : <Center>
				<div>tag 不存在</div>
			</Center>}
		</Layout>
	);
};


export {Tag};