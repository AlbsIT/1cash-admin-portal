import { gqlClient } from "@/lib/gql-client"
import {getTransactions} from "@/lib/gql-queries"
import { TTransaction } from "@/lib/types";

export default async function Transactions() {
	const data: any = await gqlClient.request(getTransactions);
	const {transactions: {edges: transactionEdge }} = data;
	const transactions: TTransaction[] = transactionEdge.map((o: {node: TTransaction}) => o.node);

	return (
		<>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>From</th>
							<th>To</th>
							<th>Amount</th>
							<th>Type</th>
							<th>At</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((t: TTransaction, i: number) => {
							return (
								<tr key={i}>
									<td>{t.fromAccount}</td>
									<td>{t.toAccount}</td>
									<td>{t.amount}</td>
									<td>{t.flag}</td>
									<td>{t.createdDate.toString()}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	)
}
