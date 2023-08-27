import Posts from './posts';

export const metadata = {
	title: 'Blog Posts',
	description: 'Minimalistic portfolio, includes social media links, blogs and tools I use'
};

export default function Blog() {

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-5xl font-bold tracking-tight text-gray-900">From the blog</h2>
					<p className="mt-2 text-xl leading-8 text-gray-600">
						Here, I unravel the intricacies of software development, I use dev.to for writing and publishing, here is a list of what I have published.
					</p>
				</div>

				<Posts/>
			</div>
		</div>
	);
}
