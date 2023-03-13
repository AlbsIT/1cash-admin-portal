import { StatisticsCards } from "@/components/statistics-cards";
import { gqlClient } from "@/lib/gql-client";
import { getStatistics } from "@/lib/gql-queries";

export default async function Dashboard() {
	const {userStatistics: data} = await gqlClient.request<any>(getStatistics);
	
	return (
		<main>
			<StatisticsCards statistics={data}/>
		</main>
	)
}
