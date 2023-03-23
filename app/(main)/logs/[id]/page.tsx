import { LogStatus } from "@/components/log-status";
import { RequestLog, RequestProperty } from "@/components/request-log";
import { gqlRequest } from "@/lib/gql-client";
import { getLog } from "@/lib/gql-queries";
import { TLog, TQueryResult } from "@/lib/types";
import { PageParams } from "@/lib/utils";

export default async function LogDetail({params}: PageParams) {
	const {id} = params;
	
	const {logs: data} = await gqlRequest(getLog, {
		 id: +id
	})
	
	const {items: logs}: TQueryResult<TLog[]> = data;
	const log: TLog = logs[0];

	return (
		<div className="space-y-5 w-full">
			<h1>Log#{id}</h1>
		
			<div className="space-y-5">
				<div className="flex gap-5">
					<RequestProperty label="ID" value={log.id} />
					<RequestProperty label="Status" value={<LogStatus status={log.status} />} />
					<RequestProperty label="Time" value={log.time} />
				</div>
		
				<div className="card">
					<h2>Body</h2>
					
					<div className="bg-gray-100 p-5 rounded-md">
						<pre>
							{JSON.stringify(JSON.parse(log.body), null, "\t")}
						</pre>
					</div>
				</div>
				<div className="card">
					<h2>Request</h2>
					
					<div className="overflow-x-auto w-full bg-gray-100 p-5 rounded-md">
						<RequestLog request={log.request} />
					</div>
				</div>
			</div>
		</div>	
	)
}
