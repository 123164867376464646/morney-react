import Nav from './Nav';
import React from 'react';
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

const Layout = (props:any) => {
	return (
		<div>
			<Wrapper>
				<Main>
					<h2>{props.children}</h2>
				</Main>
				<Nav/>
			</Wrapper>
		</div>
	);
};

export default Layout