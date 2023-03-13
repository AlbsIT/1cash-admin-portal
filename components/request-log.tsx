'use client';

import { toRequestLog } from "@/lib/utils";
import { ReactNode } from "react";

export const RequestLog = ({request}: {request: string}) => {
	const r = toRequestLog(request);
	
	return (
		<div className="w-2/5">
			{
				r.map((v, i) => (
					<div key={i} className="columns-2">
						<h3>{v.label}</h3>	
						<p>{v.value}</p>
					</div>
				))
			}
		</div>	
	)
}

export const RequestProperty = ({label, value}: {label: string, value: string | ReactNode}) => {
	return (
		<div className="card w-fit">
			<h2>{label}</h2>
			<div>{value}</div>
		</div>
	)
}