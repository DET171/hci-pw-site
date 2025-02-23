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
		<div className='flex h-screen flex-col items-center justify-center'>
			<section className='relative h-screen overflow-hidden w-full text-center'>
				<div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex flex-col justify-center'>
					<div className='relative select-none'>
						<h1 className='text-[9rem] sm:text-[10rem] lg:text-[12rem] font-horizon tracking-tighter text-red-500 leading-none z-10 relative animate-fade-in-down scale-x-110'>
							HCI
						</h1>
						<p className='font-corinthia font-black text-6xl lg:text-8xl text-gray-300 mt-[-3rem] lg:mt-[-4rem] xl:mt-[-5rem] relative z-20 animate-fade-in-up'>
							The PW Collection
						</p>
					</div>
					<p className='mt-3 max-w-3xl text-xl text-gray-300 mx-auto'>
						Explore innovative projects and groundbreaking research from our
						talented students and faculty. Witness the future of education and
						technology unfold.
					</p>
					<div className='mt-8'>
						<Link
							to='/projects'
							// className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-gray-900 text-white hover:bg-gray-800 sm:px-10 w-48 mx-auto	"
						>
							<Button variant='outline' size='xl' className='text-md duration-300'>
								View Projects <ArrowRight size={24} />
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
