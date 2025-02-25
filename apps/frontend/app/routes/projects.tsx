import { Outlet } from '@remix-run/react';

/** Layout for all the /projects routes */
export default function Layout() {
	return (
		<div className='w-5/6 md:w-4/6 mx-auto pt-28'>
			<Outlet />
		</div>
	);
}
