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

export const getLogs = gql`
	query GetAllLogs($offset: Int!) {
		logs(order: [{time: DESC}] take: 12 skip: $offset) {
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
			items {
				id
				body
				request
				status
				time
			}
		}		
	}
`;

export const getLog = gql`
query GetLog($id: Int!) {
	logs(where: {id: {eq: $id}}) {
		items {
			id
			status
			body
			request
			time
		}
	}
}
`;

export const getStatistics = gql`
	query GetStatistics() {
		userStatistics {
			monthlyActiveUsers
			registrations {
				thisMonth
				lastMonth
				difference
			}
		}
	}
`;

export const getAccounts = gql`
	query GetAccounts($offset: Int!) {
		accounts(order: [{createdDate: DESC}] take: 12 skip: $offset) {
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
			items {
				code
				phoneNo
				acctStatus
				category
				createdDate
			}
		}
	}
`;