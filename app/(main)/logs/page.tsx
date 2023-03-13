import { LogStatus } from "@/components/log-status";
import { gqlClient } from "@/lib/gql-client";
import { getLogs } from "@/lib/gql-queries";
import { TLog, TQueryResult } from "@/lib/types";
import { PageParams, truncateString } from "@/lib/utils";
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiOutlineArrowUpTray } from "react-icons/hi2";

export default async function Logs({searchParams}: PageParams) {
	const filter = searchParams?.filter ?? '';
	const offset = +(searchParams?.offset ?? 0);
	
	const {logs: data} = await gqlClient.request<any>(getLogs, {
		offset: offset * 12
	})
	
	const {pageInfo, items: logs}: TQueryResult<TLog[]> = data;

	return (
		<>
			<h1 className='mb-5'>Logs</h1>
			<form action="/logs" className="space-y-5" >
				<div className="flex gap-5">
					<select name="filter" id="filter" defaultValue={filter} className="select select-bordered w-fit max-w-ws">
						<option disabled selected>Filter</option>
						<option value="none">None</option>
						<option value="errors">Errors</option>
						<option value="normal">Normal</option>
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
								<th>ID</th>
								<th>Status</th>
								<th>Body</th>
								<th>Request</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{logs.map((l: TLog, i: number) => {
								return (
									<tr key={i}>
										<td>{l.id}</td>
										<td><LogStatus status={l.status}/></td>
										<td>{truncateString(l.body, 20)}</td>
										<td>{truncateString(l.request, 20)}</td>
										<td>{l.time}</td>	
										<td><a href={`/logs/${l.id}`}className='btn btn-sm btn-square bg-transparent text-neutral-focus hover:text-white'><HiOutlineArrowUpTray /></a></td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				
			</form>
		
		</>
	)
}