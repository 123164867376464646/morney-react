import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypeSection} from './Money/TypeSection';
import {NoteSection} from './Money/NoteSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Type = '-' | '+'

function Money() {
	const [selected, setSelected] = useState({
		tags: [] as string[],
		note: '',
		type: '-' as Type,
		amount: 0
	});
	return (
		<MyLayout>
			{selected.tags.join(',')}
			<hr/>
			{selected.note}
			<hr/>
			{selected.type}
			<hr/>
			{selected.amount}
			<TagsSection
				value={selected.tags}
				onChang={(tags) => {
					setSelected({
						...selected,
						tags: tags
					});
				}}/>
			<NoteSection
				value={selected.note}
				onChange={(note) => {
					setSelected({
						...selected,
						note: note
					});
				}}
			/>
			<TypeSection value={selected.type}
									 onChange={(type) => {
										 setSelected({
											 ...selected,
											 type: type
										 });
									 }}
			/>
			<NumberPadSection value={selected.amount}
												onChange={(amount) => {
													setSelected({
														...selected,
														amount: amount
													});
												}}
												onOk={()=>{}}
			/>
		</MyLayout>
	);
}

export default Money;