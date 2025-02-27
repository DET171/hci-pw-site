import { Client, cacheExchange, fetchExchange } from '@urql/core';
import { requestPolicyExchange } from '@urql/exchange-request-policy';

const isDev = import.meta.env.DEV;

if (!process.env.GRAPHQL_API_URL) throw new Error('Missing graphqlUrl in env');

export const client = new Client({
	url: process.env.GRAPHQL_API_URL,
	exchanges: [
		requestPolicyExchange({
			ttl: isDev ? 1 : 1000 * 60 * 5, // 5 minutes
			shouldUpgrade: (op) => true,
		}),
		cacheExchange,
		fetchExchange,
	],
});

export { gql } from '@urql/core';
