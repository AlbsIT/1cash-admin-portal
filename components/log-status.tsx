export const LogStatus = ({status}: {status: number}) => {
	return (
		<div className={`rounded-full w-fit px-5 ${status === 200 ? 'bg-success' : status === 400 ? 'bg-warning' : 'bg-error'} text-neutral-content`}>
			{status}
		</div>
	);
}
