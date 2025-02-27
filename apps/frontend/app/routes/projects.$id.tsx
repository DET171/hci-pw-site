import { DocumentRenderer } from '@keystone-6/document-renderer';
import type { LoaderFunctionArgs } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { Link, useLoaderData } from '@remix-run/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { client, gql } from '~/lib/urql.server';
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

	const result = await client.query(query, { where: { id: params.id } });

	return {
		project: result.data.project as Project,
	};
};

export default function Project() {
	const data = useLoaderData<typeof loader>();
	if (!data.project) {
		return <div>Project not found</div>;
	}
	const { project } = data;
	const category = categories.find((c) => c.value === project.category)?.label;

	console.log(project);

	return (
		<>
			<div className='flex flex-col gap-6 w-full'>
				<div>
					<Button asChild variant={'link'}>
						<Link to='/projects' className='flex items-center gap-2 pl-0!'>
							<ArrowLeft size={16} />
							Back to Projects
						</Link>
					</Button>
				</div>
				<h1 className='text-4xl font-bold'>{project.title}</h1>
				<div className='text-lg'>
					{category && <span>{category}&nbsp;&middot;&nbsp;</span>}
					{project.year.year}
				</div>
				<div className='flex gap-2'>
					{project.authors.map((author) => (
						<div key={author.name}>
							{author.name} ({author.class})
						</div>
					))}
				</div>
				{/* <div className='text-lg'>{project.summary}</div> */}
				<div className='prose prose-invert w-full max-w-none'>
					<DocumentRenderer document={project.description.document} />
				</div>
				<div>
					<Button asChild>
						<Link className='flex items-center gap-2' to={project.slides.url}>
							View Presentation Slides <ExternalLink size={16} />
						</Link>
					</Button>
				</div>
			</div>
		</>
	);
}

type Project = {
	id: string;
	title: string;
	year: { year: string };
	category: string;
	authors: { name: string; class: string }[];
	authorsCount: number;
	bannerImg: { width: number; height: number; url: string };
	slides: { filename: string; url: string };
	summary: string;
	// biome-ignore lint/suspicious/noExplicitAny:
	description: { document: any };
	createdAt: string;
};
