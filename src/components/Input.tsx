import React from 'react';
import styled from 'styled-components';

const Label = styled.label`

  display: flex;
  align-items: center;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    width: 100%;
    background: none;
    border: none;
    height: 44px;
  }
`;
type Props = {
	label:string,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
	const {label ,children, ...rest} = props
	return (
		<Label>
			<span>{props.label}</span>
			<input {...rest}/>
		</Label>
	);
};
export {Input}