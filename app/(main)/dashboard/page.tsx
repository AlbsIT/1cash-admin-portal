import { StatisticsCards } from "@/components/statistics-cards";
import { gqlRequest } from "@/lib/gql-client";
import { getStatistics } from "@/lib/gql-queries";

export default async function Dashboard() {
	const {userStatistics: data} = await gqlRequest(getStatistics);
	
	console.log(data);
	
	return (
		<main>
			<StatisticsCards statistics={data}/>
		</main>
	)
}
