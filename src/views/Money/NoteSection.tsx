import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

type Props = {
	value: string,
	onChange: (value:string) => void,
	placeholder: string,
	label: string,
	type: 'date' | 'text'
}
const NoteSection: React.FC<Props> = (props) => {
	const {value, placeholder, label, type} = props;

	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		props.onChange(e.target.value);
	};
	return (
		<Wrapper>
			{<Input type={type}
							label={label}
							value={value}
							onChange={onChange}
							placeholder={placeholder}
			/>}
		</Wrapper>
	);
};
export {NoteSection};