import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/en-sg';

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