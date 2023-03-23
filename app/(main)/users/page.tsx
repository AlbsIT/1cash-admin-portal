import { gqlRequest } from "@/lib/gql-client";
import { getAccounts } from "@/lib/gql-queries";
import { TQueryResult, TUser } from "@/lib/types";
import { formatDate, PageParams } from "@/lib/utils";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

export default async function Users({searchParams}: PageParams) {
	const {offset, filter} = searchParams;
	
	const {accounts: data} = await gqlRequest(getAccounts, {
		offset: +(offset ?? 0) * 12
	});
	
	const {pageInfo, items: users}: TQueryResult<TUser[]> = data;
	
	return (
		<div className="space-y-5">
		<h1>Users</h1>
		
		<form action="/users" className="space-y-5" >
			<div className="flex gap-5">
				<select name="filter" id="filter" defaultValue={filter} className="select select-bordered w-fit max-w-ws">
					<option disabled>Filter</option>
					<option value="none">None</option>
					<option value="member">Members</option>
					<option value="partner">Partners</option>
				</select>
				<button type='submit' className="btn">Apply Filters</button>

				<div className="grow flex justify-end gap-5">	
					{pageInfo.hasPreviousPage && <button type='submit' name='offset' className='btn btn-sm' value={+offset! >= 1 ? +offset! - 1 : 0}><HiChevronDoubleLeft /></button>}
					{pageInfo.hasNextPage && <button type='submit' name='offset' className='btn btn-sm' value={+offset! >= 0 ? +offset! + 1 : 0}><HiChevronDoubleRight /></button>}
				</div>
			</div>

			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Code</th>
							<th>Phone No</th>
							<th>Type</th>
							<th>Status</th>
							<th>Registered On</th>
						</tr>
					</thead>
					<tbody>
						{users.map((u: TUser, i: number) => {
							return (
								<tr key={i}>
									<td>{u.code}</td>
									<td>+{u.phoneNo}</td>
									<td>{u.category}</td>
									<td>{u.acctStatus}</td>
									<td>{formatDate(u.createdDate)}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
				
		</form>
		</div>
	)
}
