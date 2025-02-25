import { client, gql } from './urql';

export const getYears = async () => {
	const result = await client.query(
		gql`
			query Years {
				years {
					year
				}
			}
		`,
		{},
	);
	return result.data.years;
};
