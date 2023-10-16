import Image from 'next/image';

export const metadata = {
	title: 'Projects',
	description: 'A list of stuff I have built over the years'
};

const projects = [{
	name: 'GraphicsMagick Palette',
	description: 'Dominant color and palette using graphicsmagick',
	icon: '',
	url: 'https://github.com/akashdathan/gm-palette',
	coverImage: '/images/palette.png'
}, {
	name: 'ExTrak',
	description: 'Expense Tracker | IOS App | SwiftUI',
	icon: '',
	url: 'https://extrak.app',
	coverImage: '/images/extrak.png'
}, {
	name: 'Dresdener',
	description: 'Tram/Bus Stops Monitor | Android & IOS Apps | Ionic & Typescript',
	icon: '',
	url: 'https://apps.apple.com/de/app/dresdener-haltestellenmonitor/id1638505734',
	coverImage: '/images/dresdener.png',
}];

export default async function Blog() {

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">Projects</h2>
				</div>

				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{projects.map((project) => (
						<article key={project.name} className="flex max-w-xl flex-col items-start">
							<a href={project.url} target="_blank" rel="noopener noreferrer">
								<Image width={500} height={200} className="rounded-xl" src={project.coverImage} alt={project.name}/>
							</a>
							<div className="group relative">
								<h3 className="mt-5 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<a href={project.url} target="_blank" rel="noopener noreferrer">
										<span className="absolute inset-0" />
										{project.name}
									</a>
								</h3>
								<p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 font-body">{project.description}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
