import { Client, cacheExchange, fetchExchange } from '@urql/core';
import { requestPolicyExchange } from '@urql/exchange-request-policy';
import config from '../../config.json' with { type: 'json' };

const isDev = import.meta.env.DEV;

if (!config.graphqlUrl) throw new Error('Missing graphqlUrl in config.json');

export const client = new Client({
	url: config.graphqlUrl,
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
