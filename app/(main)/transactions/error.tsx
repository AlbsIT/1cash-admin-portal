'use client';

import { DisplayError } from "@/components/error-module";
import { TErrorPageParams } from "@/lib/types";

export default function TransactionsError({error, reset}: TErrorPageParams) {
	return (<DisplayError error={error} reset={reset} />)
}
