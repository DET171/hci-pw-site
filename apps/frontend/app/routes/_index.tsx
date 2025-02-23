import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '~/components/ui/button';

import '~/styles/_index.css';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Home' },
		{ name: 'description', content: 'Welcome to the HCI PW collections site!' },
	];
};

export default function Index() {
	return (
		<section className='relative h-screen flex items-center justify-center overflow-hidden'>
			<div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center'>
				<h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
					<span className='font-libre-caslon rainbow'>HCI</span>
					<span>:</span>&nbsp;&nbsp;
					<span className='font-windsong relative -top-2'>
						The PW Collection
					</span>
				</h1>
				<p className='mt-6 max-w-4xl text-xl text-gray-300'>
					Explore a curated collection of the award winning and top-in-category
					projects over the years.
				</p>
				<div className='mt-10 max-w-sm sm:flex sm:max-w-none'>
					<Link to='/projects'>
						<Button variant={'default'} size={'xl'} className='text-md'>
							View Projects <ArrowRight size={24} />
						</Button>
					</Link>
				</div>
				<div className='mt-12 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-3'>
					{[
						{
							label: 'Total Projects',
							description: 'Showcasing a diverse range of innovative works',
						},
						{
							label: 'Categories',
							description: 'Spanning various academic domains and subjects',
						},
						{
							label: 'Featured Works',
							description: 'Highlighting exceptional achievements in HCI',
						},
					].map((stat, index) => (
						<div
							key={stat.label}
							className='bg-background bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-5'
						>
							<p className='text-sm font-medium text-gray-400 truncate'>
								{stat.label}
							</p>
							<p className='mt-1 text-lg font-semibold text-white'>
								{stat.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
