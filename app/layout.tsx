'use client';

import './globals.css';
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
			{/*Need this for PWA, Next13 not yet supports this*/}
			<head>
				<meta name="theme-color" content="#FFFFFF" />
			</head>
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
