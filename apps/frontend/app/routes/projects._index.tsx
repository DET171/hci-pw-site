import type { LoaderFunctionArgs } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { Link, useLoaderData, useSubmit } from '@remix-run/react';
import { ArchiveX, ArrowLeft, ArrowRight, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/components/ui/card';
import { Combobox } from '~/components/ui/combobox';
import { Input } from '~/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '~/components/ui/select';
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
	const searchParam = url.searchParams.get('search');
	const yearParam = url.searchParams.get('year') || 'all';
	const categoryParam = url.searchParams.get('category') || 'all';

	// 12 projects per page

	const { data: projectsMetadata } = await client.query(
		gql`
		query ProjectsMetadata {
			projectsCount
			years {
				year
			}
		}
	`,
		{},
	);

	const { years, projectsCount } = projectsMetadata;

	const page = pageParam ? Number.parseInt(pageParam) : 1;

	if ((page - 1) * 12 > projectsCount) {
		return {
			projects: [],
			years: years as { year: number }[],
			projectsCount: projectsCount as number,
			page: 1,
			take: 12,
			skip: 0,
		};
	}

	const take = 12;
	const skip = (page - 1) * take;

	const result = await client.query(
		gql`
		query Projects($take: Int, $skip: Int, $filter: ProjectWhereInput!) {
			projects(take: $take, skip: $skip, where: $filter) {
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
			filter: {
				...(searchParam ? { title: { contains: searchParam } } : {}),
				...(yearParam && yearParam !== 'all'
					? { year: { year: { equals: yearParam } } }
					: {}),
				...(categoryParam !== 'all'
					? { category: { equals: categoryParam } }
					: {}),
			},
		},
	);

	return {
		projects: result.data?.projects as Project[],
		projectsCount: projectsCount as number,
		years: years as { year: number }[],
		page: page as number,
		take: take as number,
		skip: skip as number,
	};
};

export default function Projects() {
	const { projects, projectsCount, page, take, skip, years } =
		useLoaderData<typeof loader>();

	// console.log(projects);

	const [search, setSearch] = useState('');
	const [year, setYear] = useState<string>('all');
	const [category, setCategory] = useState<string>('all');

	const submit = useSubmit();

	const searchSubmit = () => {
		submit({ search, year, category }, { method: 'GET' });
	};

	const clearFilters = () => {
		setSearch('');
		setYear('all');
		setCategory('all');
		submit({}, { method: 'GET' });
	};

	return (
		<>
			<h1 className='text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl'>
				Projects
			</h1>

			<div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-8 gap-4 mt-10'>
					<Select
						value={year}
						onValueChange={(val) => setYear(val)}
						name='year'
					>
						<SelectTrigger>
							<SelectValue>{year === 'all' ? 'All Years' : year}</SelectValue>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Years</SelectLabel>
								<SelectItem value='all'>All Years</SelectItem>
								{years.map((year) => (
									<SelectItem key={year.year} value={year.year.toString()}>
										{year.year}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
					<Combobox
						value={category}
						onValueChange={(val) => setCategory(val)}
						name='category'
						className='w-full col-span-1 lg:col-span-2'
						options={[{ label: 'All Categories', value: 'all' }].concat(
							categories,
						)}
					/>
					<div className='flex items-center gap-4 md:col-span-2 lg:col-span-3 2xl:col-span-5'>
						<Input
							type='text'
							placeholder='Search'
							name='search'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onKeyUp={(e) => {
								if (e.key === 'Enter') {
									searchSubmit();
								}
							}}
						/>
						<Button variant='secondary' onClick={searchSubmit} title='Search'>
							<Search size={16} />
						</Button>
						<Button
							variant='outline'
							type='button'
							onClick={clearFilters}
							title='Clear Filters'
						>
							<X size={16} />
						</Button>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-10'>
				{projects?.length ? (
					projects.map((project) => (
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
					))
				) : (
					<div className='flex flex-col gap-4 items-center justify-center col-span-full text-gray-400'>
						<ArchiveX size={64} />
						<p>No projects found</p>
					</div>
				)}
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
