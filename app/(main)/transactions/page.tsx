import { TransactionFlag } from "@/components/transaction-flag";
import { gqlClient } from "@/lib/gql-client"
import {getTransactions} from "@/lib/gql-queries"
import { TQueryResult, TTransaction } from "@/lib/types";
import { formatDate, PageParams, toCurrency } from "@/lib/utils";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

export default async function Transactions({searchParams}: PageParams) {
	const filter = searchParams?.filter;
	const offset = +(searchParams?.offset ?? 0);

	const {transactions: data} = await gqlClient.request<any>(getTransactions, {
		filter: filter ?? 'none',
		offset: offset * 12
	});
	
	const {pageInfo, items: transactions}: TQueryResult<TTransaction[]> = data;
	
	return (
		<form action="/transactions" className="space-y-5" >
			<div className="flex gap-5">
				<select name="filter" id="filter" defaultValue={filter} className="select select-bordered w-fit max-w-ws">
					<option disabled>Filter</option>
					<option value="none">None</option>
					<option value="withdraw">Withdraw</option>
					<option value="deposit">Deposit</option>
				</select>
				<button type='submit' className="btn">Apply Filters</button>

				<div className="grow flex justify-end gap-5">	
					{pageInfo.hasPreviousPage && <button type='submit' name='offset' className='btn btn-sm' value={offset >= 1 ? offset - 1 : 0}><HiChevronDoubleLeft /></button>}
					{pageInfo.hasNextPage && <button type='submit' name='offset' className='btn btn-sm' value={offset >= 0 ? offset + 1 : 0}><HiChevronDoubleRight /></button>}
				</div>
			</div>

			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Type</th>
							<th>From</th>
							<th>To</th>
							<th>Amount</th>
							<th>At</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((t: TTransaction, i: number) => {
							return (
								<tr key={i}>
									<td><TransactionFlag flag={t.flag} /></td>
									<td>{t.fromAccount}</td>
									<td>{t.toAccount}</td>
									<td>{toCurrency(t.amount)}</td>
									<td>{formatDate(t.createdDate)}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
				
		</form>
	)
}
