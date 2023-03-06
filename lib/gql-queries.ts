import { gql } from "graphql-request";

export const getTransactions = gql`
	query GetAllTransactions {
		transactions(first: 10 order: [{createdDate: DESC}]) {
	    edges {
	      node {
	        id
	        fromAccount
	        toAccount
	        amount
	        flag
	        createdDate
	      }
	    } 
	  }
	}
`;