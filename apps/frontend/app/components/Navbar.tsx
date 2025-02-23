import { Link } from '@remix-run/react';
import { PanelsTopLeft } from 'lucide-react';
import { Button } from '~/components/ui/button';

export default function Navbar() {
	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-md border-b border-white/10'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<Link to='/' className='text-2xl font-gray-200'>
							{/* <span className="font-corinthia">PW</span> */}
							<PanelsTopLeft size={24} />
						</Link>
					</div>
					<div className='flex items-center space-x-4'>
						<Link to={'/projects'}>
							<Button variant='ghost' className='text-sm'>
								Projects
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
