'use client';

import './globals.css';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	const pathname = usePathname();

	return (
		<html lang="en">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
			</Head>
			<body className={inter.className}>
				<div className="bg-white flex flex-col min-h-screen">
					<Header/>

					<div className={`flex-grow px-6 max-w-screen-2xl mx-auto w-full ${pathname === '/' ? 'items-center' : ''} flex`}>
						{children}
					</div>

					<div className="mt-auto">
						<Footer isHomePage={pathname === '/'} />
					</div>
				</div>
			</body>
		</html>
	);
}
