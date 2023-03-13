'use client';

import { TErrorPageParams } from "@/lib/types";
import { HiFire } from "react-icons/hi2";

export const DisplayError = ({ error, reset }: TErrorPageParams) => {
	return (
		<div className='space-y-5 text-error'>
			<HiFire size={32}/>
			<h1>Uh oh!</h1>
			<h3>{error instanceof Error ? error.message : error}</h3>
			<button onClick={()=>reset()}>Reload component</button>
		</div>
	);
}
