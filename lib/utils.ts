import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/en-sg';
import { TRequestLog } from './types';

dayjs.locale('en-sg')

export const toCurrency = (input: number): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'PHP'
	});
	
	return formatter.format(input);
}

export const formatDate = (date: string | Date): string => {
	dayjs.extend(LocalizedFormat);
	return dayjs(date).format('ll h:mm A');
}

export const truncateString = (str: string, length: number) => {
	if (str.length <= length) return str;
	
	return str.slice(0, length) + '...';
}

export const toRequestLog = (request: string) => {
	const spls = request.split('&');
	
	const props = spls.map((v) => {
		const x = v.split('=');
		return { label: x[0], value: x[1] };
	})
	
	return props;
}

export type PageParams = {
	params: any
	searchParams: {
		[key: string]: number | string | string[] | undefined
	}
}