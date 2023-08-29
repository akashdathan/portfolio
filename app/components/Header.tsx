'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import {
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
	{ name: 'Blog', href: '/blog' },
	{ name: 'Projects', href: '/projects' },
	// { name: 'My Gear', href: '#' },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`sticky top-0 z-30 max-w-screen-2xl mx-auto w-full px-6 ${isScrolled && 'bg-opacity-50 backdrop-blur-md shadow-sm'}`}>

			<nav className="flex items-center justify-between" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5 flex items-center">
						<Image
							className="h-20 w-auto"
							src="/images/profile.svg"
							alt="Logo"
							width={80} height={80}
						/>
						<span className="ml-2 text-xl text-font-grey">Akash</span>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-10 w-10" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-6">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-xl leading-6 text-font-grey rounded-lg hover:bg-gray-100 p-2 px-4"
						>
							{item.name}
						</a>
					))}
				</div>
			</nav>

			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5 flex items-center">
							<Image
								className="h-20 w-auto"
								src="/images/profile.svg"
								alt="Logo"
								width={80} height={80}
							/>
							<span className="ml-2 text-xl text-font-grey">Akash</span>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-10 w-10" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-xl leading-7 text-font-grey hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}