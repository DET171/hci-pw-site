import type { LinksFunction } from '@remix-run/node';
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData
} from '@remix-run/react';
import Navbar from './components/Navbar';
import { client } from './lib/urql';

import './styles/tailwind.css';
import './styles/global.css';

export const links: LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=WindSong:wght@400;500&display=swap',
	},
];

export const loader = async () => {
	const result = await client.query(`
		query Years {
			years {
				year
			}
		}
	`, {});

	return {
		years: result.data.years,
	};
};

export function Layout({ children }: { children: React.ReactNode }) {
	const { years } = useLoaderData<typeof loader>();

	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				<Navbar years={years} />
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
			<Outlet />
	);
}
