export type TTransaction = {
	id: string;
	fromAccount: string;
	toAccount: string;
	amount: number;
	flag: number;
	createdDate: Date;
	cursor: string;
}

export type TUser = {
	code: string;
	phoneNo: number;
	acctStatus: string;
	category: string;
	createdDate: Date;
}

export type TRequestLog = {
	toCountry: string;
	status: string;
	body: string;
	to: string;
	from: string;
}

export type TLog = {
	id: string;
	status: number;
	body: string;
	request: string;
	time: string;
}

export type TStatistics = {
	activeUsers: {
		thisMonth: number;
		lastMonth: number;
		monthly: number;
	};
	registrations: {
		thisMonth: number;
		lastMonth: number;
		difference: number;
	};	
}

export type TQueryResult<ItemType> = {
	pageInfo: {
		hasNextPage: boolean;
		hasPreviousPage: boolean;
	}
	
	items: ItemType
}

export type TLayoutParams = {
	children: React.ReactNode;
}

export type TErrorPageParams = {
	error: Error;
	reset: () => void;
}