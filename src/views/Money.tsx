import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {TypeSection} from './Money/TypeSection';
import {NoteSection} from './Money/NoteSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
	return (
		<MyLayout>
			<TagsSection/>
			<NoteSection/>
			<TypeSection/>
			<NumberPadSection/>
		</MyLayout>
	);
}

export default Money;