import type { MetaFunction } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import { client, gql } from '~/lib/urql';
import { categories } from '~/lib/utils';

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

export const loader = async ({ params }: LoaderFunctionArgs) => {
	if (!params.id) {
		return { project: null };
	}

	const query = gql`
		query Project($where: ProjectWhereUniqueInput!) {
			project(where: $where) {
				id
				title
				year {
					year
				}
				category
				authors {
					name
					class
				}
				authorsCount
				bannerImg {
					width
					height
					url
				}
				slides {
					filename
					url
				}
				summary
				description {
					document
				}
				createdAt
			}
		}
	`;

	const result
		= await client.query(query, { where: { id: params.id } });

	return {
		project: result.data.project as Project,
	};
}

export default function Project() {
	const data = useLoaderData<typeof loader>();
	if (!data.project) {
		return <div>Project not found</div>;
	}
	const { project } = data;

	console.log(project);
	
	return (
		<div className='w-5/6 md:w-4/6 mx-auto pt-28'>
			<h1 className='text-2xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
				Projects
			</h1>
			
		</div>
	)
}

type Project = {
	id: string;
	title: string;
	year: { year: string };
	category: string;
	authors: { name: string; class: string }[];
	authorsCount: number;
	bannerImg: { width: number; height: number; url: string };
	slides: { filename: string; url: string }[];
	summary: string;
	description: { document: string };
	createdAt: string;
};