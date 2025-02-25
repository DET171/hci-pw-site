import type { LoaderFunctionArgs } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { Link, useFetcher, useLoaderData } from '@remix-run/react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/components/ui/card';
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

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const pageParam = url.searchParams.get('page');

	// 12 projects per page

	const projectsCount = await client.query(
		gql`
		query ProjectsCount {
			projectsCount
		}
	`,
		{},
	);

	console.log(projectsCount.data);

	const page = pageParam ? Number.parseInt(pageParam) : 1;

	if ((page - 1) * 12 > projectsCount.data.projectsCount) {
		return {
			projects: [],
			projectsCount: projectsCount.data.projectsCount as number,
			page: 1,
			take: 12,
			skip: 0,
		};
	}

	const take = 12;
	const skip = (page - 1) * take;

	const result = await client.query(
		gql`
		query Projects($take: Int, $skip: Int) {
			projects(take: $take, skip: $skip) {
				id
				title
				category
				authors {
					name
					class
				}
				bannerImg {
					url
					height
					width
				}
				summary
				year {
					year
				}
			}
		}
	`,
		{
			take,
			skip,
		},
	);

	return {
		projects: result.data.projects as Project[],
		projectsCount: projectsCount.data.projectsCount as number,
		page: page as number,
		take: take as number,
		skip: skip as number,
	};
};

export default function Projects() {
	const { projects, projectsCount, page, take, skip } =
		useLoaderData<typeof loader>();

	const fetcher = useFetcher();

	return (
		<>
			<h1 className='text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl'>
				Projects
			</h1>
			<div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-10'>
				{projects.map((project) => (
					<Card key={project.id} className='pt-0'>
						<img
							src={project.bannerImg.url}
							alt={project.title}
							className='w-full h-48 object-cover rounded-t-xl'
						/>
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>
								<p>{project.summary}</p>
								<br />
								<p>
									{project.year.year} &middot;{' '}
									{
										categories.find((cat) => cat.value === project.category)
											?.label
									}
								</p>
								<br />
								<p>
									Group Members:
									<br />
									{project.authors
										.map((author) => `${author.name} (${author.class})`)
										.join(', ')}
								</p>
							</CardDescription>
						</CardContent>
						<CardFooter className='text-sm'>
							<Link
								to={`/projects/${project.id}`}
								className='text-blue-500 hover:underline flex items-center'
							>
								Read more&nbsp;
								<ArrowRight size={16} />
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>

			<div className='mt-10'>
				{skip > 0 && (
					<Button asChild variant={'outline'}>
						<Link
							to={`/projects?page=${page - 1}`}
							className={'flex items-center float-left'}
						>
							<ArrowLeft className='inline-block' size={16} />
							&nbsp;Prev
						</Link>
					</Button>
				)}

				{projectsCount > page * take && (
					<Button asChild variant={'outline'}>
						<Link
							to={`/projects?page=${page + 1}`}
							className={'flex items-center float-right'}
						>
							Next&nbsp;
							<ArrowRight className='inline-block' size={16} />
						</Link>
					</Button>
				)}
			</div>
		</>
	);
}

type Project = {
	id: number;
	title: string;
	category: string;
	authors: { name: string; class: string }[];
	bannerImg: {
		url: string;
		height: number;
		width: number;
	};
	summary: string;
	year: {
		year: number;
	};
};
