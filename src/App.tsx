import React from "react";
import {
	HashRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";
import Tags from './views/Label';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NotFound from './views/NotFound';
import styled from 'styled-components';
import {Tag} from './views/Tag';
import Icon from './components/Icon';
import qrcode from './pictures/qrcode.png';

const AppWrapper = styled.div`
  color: #333;
`;

const QrcodeWrapper = styled.div`

  > .qrcode-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    > .close {
      width: 25px;
      height: 25px;
      position: absolute;
      right: 0;
    }

    > .close:hover {
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.4);
      border-radius: 25%;
    }

    > .qrcode {
      max-width: 350px;
      max-height: 350px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    }

   &.closed {
		 display: none;
    }

    @media (max-width: 500px) {
      display: none;
    }
  }


`;
export default function App() {
	const closeItem = () => {
		const div = document.getElementsByClassName("qrcode-wrapper")[0];
		div.classList.add('closed');
	};
	return (
		<AppWrapper>
			<Router>
				<Routes>
					<Route path="/tags" element={<Tags/>}></Route>

					<Route path="/tags/:id" element={<Tag/>}></Route>

					<Route path="/money" element={<Money/>}></Route>

					<Route path="/statistics" element={<Statistics/>}></Route>

					<Route path="/" element={<Navigate replace to="/money"/>}/>

					<Route path="*" element={<NotFound/>}/>
				</Routes>
			</Router>
			<QrcodeWrapper>
				<div className="qrcode-wrapper">
					<Icon name="close" className="close" onClick={closeItem}/>
					<img src={qrcode} alt="" className="qrcode"/>
				</div>
			</QrcodeWrapper>
		</AppWrapper>
	);
}