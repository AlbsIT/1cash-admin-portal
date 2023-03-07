export const TransactionFlag = ({flag}: {flag: number}) => {
	return (
		<div className={`badge ${flag === -1 ? 'badge-error' : 'badge-success'} text-white`}>
			{flag === -1 ? 'Withdraw' : 'Deposit'}
		</div>
	);	
}
