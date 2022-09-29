import Layout from '../components/Layout';
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {TypeSection} from './Money/TypeSection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
import {LineBarChart} from '../components/LineBarChart';
import _, {clone} from 'lodash';
import dayjs from 'dayjs';

const ChartWrapper = styled.div`
  overflow: auto;

  > .chart-bar {
    width: 430%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
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
  display: flex;
  justify-content: space-between;
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
		return selectedRecords;
	});
	const UseGroupedList = () => {
		const {records} = useRecords();
		const newList = clone(records)
			.filter(r => r.type === type)
			.sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
		if(newList.length === 0) {return [];}
		type Result = {
			title: string,
			total?: number,
			items: RecordItem[]
		}[]
		const result: Result = [{title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items: [newList[0]]}];
		for(let i = 1; i < newList.length; i++) {
			const current = newList[i];
			const last = result[result.length - 1];
			if(dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
				last.items.push(newList[i]);
			} else {
				result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), items: [current]});
			}
		}
		result.map(group => {
			return group.total = group.items.reduce((sum, item) => {
				return sum + item.amount;
			}, 0);
		});
		return result;
	};
	const keyValueList = () => {
		const today = new Date();
		const array1 = [];
		for(let i = 0; i <= 29; i++) {
			const dateString = day(today).subtract(i, 'day').format('YYYY-MM-DD');
			const found = _.find(UseGroupedList(), {
				title: dateString
			});
			array1.push({
				key: dateString, value: found ? found.total : 0
			});
			array1.sort((a, b) => {
				if(a.key > b.key) {
					return 1;
				} else if(a.key === b.key) {
					return 0;
				} else {
					return -1;
				}
			});
		}
		return array1;
	};
	const keys = keyValueList().map(item => item.key);
	const values = keyValueList().map(item => item.value);
	const option = {
		tooltip: {
			trigger: 'item',
			triggerOn: 'mousemove|click',
			position: 'top',
			formatter: '{c}'
		},
		grid: {
			left: 0,
			right: 0,
		},
		xAxis: {
			type: 'category',
			data: keys,
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: {
				formatter: function(value: string) {
					return value.substr(5);
				}
			},
			axisLine: {
				lineStyle: {
					color: '#666'
				}
			}
		},
		yAxis: {
			show: false,
			type: 'value'
		},
		series: [
			{
				symbol: 'circle',
				symbolSize: 12,
				itemStyle: {
					color: '#666',
				},
				data: values,
				type: 'line',
			}
		]
	};
	const Beautify = (string: string) => {
		const day = dayjs(string);
		const now = dayjs();
		if(day.isSame(now, 'day')) {
			return '今天';
		} else if(day.isSame(now.subtract(1, 'day'), 'day')) {
			return '昨天';
		} else if(day.isSame(now.subtract(2, 'day'), 'day')) {
			return '前天';
		} else if(day.isSame(now, 'year')) {
			return day.format('M月D日');
		} else {
			return day.format('YYYY年M月D日');
		}
	};
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		ref.current!.scrollLeft = ref.current!.scrollWidth;
	}, []);
	return (
		<Layout>
			<TypeSectionWrapper>
				<TypeSection value={type}
										 onChange={value => setType(value)}/>
			</TypeSectionWrapper>
			<ChartWrapper ref={ref}>
				<div className="chart-bar">
					<LineBarChart option={option}/>
				</div>
			</ChartWrapper>
			{UseGroupedList().map((group, index) =>
				<div key={index}>
					<Header>
						{Beautify(group.title)}
						<span>
							￥{group.total}
						</span>
					</Header>
					<div>
						{group.items.map((r, index) => {
							return (
								<Items key={index}>
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
								</Items>
							);
						})}
					</div>
				</div>
			)}
		</Layout>
	);
}

export default Statistics;