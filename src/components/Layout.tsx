import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
	
`;
type Props = {
	className?: string,
	scrollTop?: number
} & React.HTMLAttributes<any>

const Layout: React.FC<Props> = (props) => {
	const {className, scrollTop, children, ...rest} = props;
	const mainRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		setTimeout(() => {
			if(!mainRef.current) {return;}
			mainRef.current.scrollTop = props.scrollTop!;
		}, 0);

	}, [props.scrollTop]);
	return (
		<div>
			<Wrapper>
				<Main ref={mainRef} className={props.className}>
					{props.children}
				</Main>
				<Nav/>
			</Wrapper>
		</div>
	);
};

export default Layout;