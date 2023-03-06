export type TTransaction = {
	id: string;
	fromAccount: string;
	toAccount: string;
	amount: number;
	flag: number;
	createdDate: Date;
}
