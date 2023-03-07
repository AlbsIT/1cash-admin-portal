import { gql } from "graphql-request";

export const getTransactions = gql`
	query GetAllTransactions($filter: String!, $offset: Int!) {
		transactions(order: [{createdDate: DESC}] filter: $filter take: 12 skip: $offset) {
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
      items {
        id
        fromAccount
        toAccount
        amount
        flag
        createdDate
      }
		}
	}
`;