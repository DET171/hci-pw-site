import type { LinksFunction } from '@remix-run/node';
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteLoaderData,
	useRouteError,
} from '@remix-run/react';
import Navbar from './components/Navbar';
import { client, gql } from './lib/urql';

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
	const result = await client.query(gql`
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
	const data = useRouteLoaderData<typeof loader>('root');
	if (!data) throw new Error('No data');

	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				<Navbar years={data.years} />
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}


export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html lang='en'>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Oh no!</h1>
				<p>Something went wrong.</p>
        <Scripts />
      </body>
    </html>
  );
}