'use client'

import { TStatistics } from "@/lib/types"
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi2";

export const StatisticsCards = ({statistics}: {statistics: TStatistics}) => {
	const {activeUsers, registrations} = statistics;
	
	return (
		<div className="flex gap-5">
			<div className="stats shadow">	
				<div className="stat">
					<div className="stat-title">Monthly Active Users</div>
					<div className="stat-value">{activeUsers.monthly}</div>
				</div>
				<div className="stat">
					<div className={`stat-figure ${registrations.difference < 0 ? 'text-error' : 'text-success'} text-2xl`}>{registrations.difference < 0 ? <HiChevronDoubleDown /> : <HiChevronDoubleUp />}</div>
					<div className="stat-title">Registrations</div>
					<div className="stat-value">{registrations.thisMonth}</div>
					<div className="stat-desc">With a difference of {registrations.difference} from last month</div>
				</div>
			</div>
		
		
		</div>
	)
}
