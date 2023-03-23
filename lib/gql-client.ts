import {GraphQLClient} from 'graphql-request';

export const gqlClient = new GraphQLClient(process.env.API_URL ?? 'https://1cash-api-93.azurewebsites.net/gql', {  });

export const gqlRequest = async (query: string, variables?: any) => {
  const res = await fetch(process.env.API_URL ?? 'https://1cash-api-93.azurewebsites.net/gql', {
    method: "POST",
    cache: 'no-store', 
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  });
  
  const {data} = await res.json();
  return data;
}
