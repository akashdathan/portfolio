import Image from 'next/image';

export default function NotFound() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center m-auto space-y-4 md:space-y-0 md:space-x-32">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-gray-900">404</h1>
				<p className="text-xl mt-4 text-gray-600">Page Not Found</p>
			</div>
			<Image width={500} height={500} src='/images/laziness.svg' alt='Page Not Found'/>
		</div>

	);
}