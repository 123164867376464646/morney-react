import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypeSection} from './Money/TypeSection';
import {NoteSection} from './Money/NoteSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const TypeSectionWrapper = styled.div`
background: #c4c4c4;
`
type Type = '-' | '+'
const defaultFormData = {
	tagIds: [] as number[],
	type: '-' as Type,
	note: '',
	amount: 0
};

function Money() {
	const [selected, setSelected] = useState(defaultFormData);
	const {addRecord} = useRecords();
	const onChange = (obj: Partial<typeof selected>) => {
		setSelected({
			...selected,
			...obj
		});
	};
	const submit = () => {
		if(addRecord(selected)) {
			alert('保存成功');
			setSelected(defaultFormData);
		}
	};

	return (
		<MyLayout scrollTop={document.body.clientHeight}>
			<TagsSection
				value={selected.tagIds}
				onChange={tagIds => onChange({tagIds})}/>
			<NoteSection
				value={selected.note}
				onChange={note => onChange({note})}/>
			<TypeSectionWrapper>
				<TypeSection value={selected.type}
										 onChange={type => onChange({type})}/>
			</TypeSectionWrapper>
			<NumberPadSection value={selected.amount}
												onChange={amount => onChange({amount})}
												onOk={submit}
			/>
		</MyLayout>
	);
}

export default Money;