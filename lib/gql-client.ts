import {GraphQLClient} from 'graphql-request';

export const gqlClient = new GraphQLClient(process.env.API_URL ?? 'https://1cash-api-93.azurewebsites.net/gql');
