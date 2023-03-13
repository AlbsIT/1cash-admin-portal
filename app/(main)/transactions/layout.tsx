import { ReactNode } from "react";

export default function TransactionsLayout({
	children
}: {
		children: ReactNode
	}) {
	return (
		<div className="space-y-5">
			<h1>Transactions</h1>
			{children}
		</div>
	)
}
