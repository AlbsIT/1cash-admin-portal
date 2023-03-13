import { ReactNode } from "react";

export default function DashboardLayout({
	children
}: {
		children: ReactNode
	}) {
	return (
		<div className='space-y-5'>
			<h1>Dashboard</h1>
			{children}
		</div>
	)
}
