import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypeSection} from './Money/TypeSection';
import {NoteSection} from './Money/NoteSection';
import {useRecords} from '../hooks/useRecords';
import day from 'dayjs';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const TypeSectionWrapper = styled.div`
  background: #c4c4c4;
`;
const DateWrapper = styled.div`
`;
const NoteWrapper = styled.div`
  padding: 10px 0;

`;
type Type = '-' | '+'
const defaultFormData = {
	tagIds: [] as number[],
	type: '-' as Type,
	note: '',
	amount: 0,
	createAt: new Date().toISOString()
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
	const X = (iosString: string) => {
		return day(iosString).format('YYYY-MM-DD');
	};

	return (
		<MyLayout scrollTop={document.body.clientHeight}>
			<TagsSection
				value={selected.tagIds}
				onChange={tagIds => onChange({tagIds})}/>
			<NoteWrapper>
				<NoteSection
					type="text"
					value={selected.note}
					label="备注"
					placeholder="在这里输入备注"
					onChange={note => onChange({note})}/>
			</NoteWrapper>
			<DateWrapper>
				<NoteSection
					type="date"
					value={X(selected.createAt)}
					label="日期"
					placeholder="在这里输入日期"
					onChange={createAt => onChange({createAt})}/>
			</DateWrapper>
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