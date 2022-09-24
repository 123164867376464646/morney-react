import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {TypeSection} from './Money/TypeSection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const TypeSectionWrapper = styled.div`
  background: white;
`;
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
	const [type, setType] = useState<'-' | '+'>('-');
	const {records} = useRecords();
	const {getName} = useTags();
	const hash: { [K: string]: RecordItem[] } = {};

	const selectedRecords = records.filter(r => r.type === type);
	selectedRecords.map(r => {
		const key = day(r.createAt).format('YYYY年MM月DD日');
		if(!(key in hash)) {
			hash[key] = [];
		}
		hash[key].push(r);
	});
	const array = Object.entries(hash)
		.sort((a, b) => {
			if(a[0] === b[0]) return 0;
			if(a[0] > b[0]) return -1;
			if(a[0] < b[0]) return 1;
			return 0;
		});

	return (
		<Layout>
			<TypeSectionWrapper>
				<TypeSection value={type}
										 onChange={value => setType(value)}/>
			</TypeSectionWrapper>
			{array.map(([date, records]) =>
				<div>
					<Header>
						{date}
					</Header>
					<div>
						{records.map(r => {
							return <Items >
								<div className="tags oneLine">
									{r.tagIds
										.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
										.reduce((result: any, span, index, array) =>
											result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode)
									}
								</div>
								{r.note && <div className="note">
									{r.note}
                </div>}
								<div className="amount">
									￥{r.amount}
								</div>
							</Items>;
						})}
					</div>
				</div>
			)}

		</Layout>
	);
}

export default Statistics;