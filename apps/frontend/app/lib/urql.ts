import { Client, cacheExchange, fetchExchange } from '@urql/core';
import config from '../../config.json' with { type: 'json ' };

if (!config.graphqlUrl) throw new Error('Missing graphqlUrl in config.json');

export const client = new Client({
	url: config.graphqlUrl,
	exchanges: [cacheExchange, fetchExchange],
});

export { gql } from '@urql/core';