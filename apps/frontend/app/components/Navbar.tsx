import { Link } from '@remix-run/react';
import { PanelsTopLeft } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function Navbar({
	years,
}: {
	years: { year: number }[];
}) {
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
						{/* <DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='ghost' className='text-sm'>
									Years
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='w-36 bg-popover/50'>
								<Link to='/'>
									<DropdownMenuItem>All Projects</DropdownMenuItem>
								</Link>
								<DropdownMenuSeparator />
								<DropdownMenuLabel>Years</DropdownMenuLabel>
								<DropdownMenuSeparator />
								{years.map((year) => (
									<Link to={`/years/${year.year}`} key={year.year}>
										<DropdownMenuItem key={year.year}>
											{year.year}
										</DropdownMenuItem>
									</Link>
								))}
							</DropdownMenuContent>
						</DropdownMenu> */}
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
