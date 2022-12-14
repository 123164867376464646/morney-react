import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;

    li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

type Props = {
	value: '-'|'+',
	onChange: (value: '-'|'+') => void
}
const TypeSection: React.FC<Props> = (props) => {
	const typeMap = {'-': '支出', '+': '收入'};
	type Keys = keyof typeof typeMap
	const [typeList] = useState<Keys[]>(['-', '+']);
	const type = props.value
	return (
		<Wrapper>
			<ul>
				{typeList.map(t =>
					<li key={t} className={type === t ? "selected" : ''}
							onClick={() => {props.onChange(t);}}
					>{typeMap[t]}
					</li>
				)}
			</ul>
		</Wrapper>
	);
};
export {TypeSection};