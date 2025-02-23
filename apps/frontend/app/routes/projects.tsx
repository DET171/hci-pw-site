import type { MetaFunction } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import { client } from '~/lib/urql';

export const meta: MetaFunction = () => {
	return [
		{
			title: 'Projects',
		},
		{
			name: 'description',
			content: 'Welcome to the HCI PW collections site!',
		},
	];
};

export const loader = async () => {
	const result = await client.query(`
		query Years {
			years {
				year
			}
		}
	`, {});

	return result.data;
};

export default function Projects() {
	const data = useLoaderData<typeof loader>();
	console.log(data);
	
	return (
		<div className='w-5/6 md:w-4/6 mx-auto pt-28'>
			<h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
				Projects
			</h1>
		</div>
	)
}
