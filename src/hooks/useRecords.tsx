import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
	tagIds: number[],
	note: string,
	type: '-' | '+',
	amount: number,
	createAt: string
}
export const useRecords = () => {
	const [records, setRecords] = useState<RecordItem[]>([]);
	useEffect(() => {
		setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
	}, []);
	useUpdate(() => {
		window.localStorage.setItem('records', JSON.stringify(records));
	}, [records]);
	const addRecord = (newRecord: any) => {
		if(newRecord.amount <= 0) {
			alert('请检查金额')
			return false;
		}
		if(newRecord.tagIds.length === 0) {
			alert('请至少选择一种标签');
			return false;
		}
		setRecords([...records, newRecord]);
		return true;
	};
	return {records, addRecord};
};

