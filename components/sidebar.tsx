
import Link from 'next/link';
import { ReactElement } from 'react';
import {HiOutlineArrowLeftOnRectangle, HiOutlineBugAnt, HiOutlineCircleStack, HiOutlineSquares2X2, HiOutlineUser} from 'react-icons/hi2';

type TSidebarItem = {
	label: string;
	route: string;
	icon: ReactElement;
}

const SidebarItems: TSidebarItem[] = [
	{
		label: "Dashboard",
		route: "/dashboard",
		icon: <HiOutlineSquares2X2 size={20}/>
	},
	{
		label: "Transactions",
		route: "/transactions",
		icon: <HiOutlineCircleStack size={20} />
	},
	{
		label: "Users",
		route: "/users",
		icon: <HiOutlineUser size={20} />
	},
	{
		label: "Logs",
		route: "/logs",
		icon: <HiOutlineBugAnt size={20} />
	},
	{
		label: "Sign out",
		route: "/signout",
		icon: <HiOutlineArrowLeftOnRectangle size={20} />
	}
]

export default function Sidebar() {

	return <div className="flex flex-col gap-5 px-5 py-10 h-screen border-dashed border-r-2 border-gray-100">
		<h1 className="text-2xl font-bold border-b pb-5">1Cash Admin</h1>
		{SidebarItems.map((item, i) => (
			<Link className={'flex align-center text-gray-500 gap-5 py-2 pl-5 pr-20 rounded-md hover:bg-primary-accent hover:text-primary-focus'} key={i} href={item.route}>
				{item.icon} {item.label}
			</Link>
		))}
	</div>
}
