import { ReactNode } from "react";

export default function DashboardLayout({
	children
}: {
		children: ReactNode
	}) {
	return (
		<div>
			<h1 className="text-2xl">Dashboard</h1>
			{children}
		</div>
	)
}
