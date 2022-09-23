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
		addRecord(selected);
		alert('保存成功');
		setSelected(defaultFormData);
	};

	return (
		<MyLayout>
			{JSON.stringify(selected)}
			<TagsSection
				value={selected.tagIds}
				onChange={tagIds => onChange({tagIds})}/>
			<NoteSection
				value={selected.note}
				onChange={note => onChange({note})}/>
			<TypeSection value={selected.type}
									 onChange={type => onChange({type})}/>
			<NumberPadSection value={selected.amount}
												onChange={amount => onChange({amount})}
												onOk={submit}
			/>
		</MyLayout>
	);
}

export default Money;