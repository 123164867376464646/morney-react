import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  background: white;
	line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.33333%;
      text-align: center;
      > a {
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > .icon {
          width: 24px;
          height: 24px;
        }
				&.selected{
					color:rgb(241,95,20);
					.icon{
						fill:rgb(241,95,20);
					}
				}
      }
    }
  }

`;
const Nav = () => {

	return (
		<NavWrapper>
			<ul>
				<li>
					<NavLink
						to="/tags"
						className={({isActive}) =>
							isActive ? 'selected' : undefined
						}
					>
						<Icon name="label"/>
						标签
					</NavLink>
				</li>
				<li>
					<NavLink to="/money"
									 className={({isActive}) =>
										 isActive ? 'selected' : undefined
									 }
					>
						<Icon name="money"/>
						记一笔
					</NavLink>
				</li>
				<li>
					<NavLink to="/statistics"
									 className={({isActive}) =>
										 isActive ? 'selected' : undefined
									 }
					>
						<Icon name="statistics"/>
						统计
					</NavLink>
				</li>
			</ul>
		</NavWrapper>
	);
};
export default Nav;
