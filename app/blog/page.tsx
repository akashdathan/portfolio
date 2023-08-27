import { fetchArticles } from './dev-to-articles';
import Image from 'next/image';

export const metadata = {
	title: 'Blog Posts',
	description: 'Minimalistic portfolio, includes social media links, blogs and tools I use'
};

export default async  function Blog() {
	const posts = await fetchArticles();

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">From the blog</h2>
					<p className="text-lg lg:text-xl mt-2 leading-8 text-gray-600">
						Here, I unravel the intricacies of software development, I use dev.to for writing and publishing, here is a list of what I have published.
					</p>
				</div>

				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts && posts.map((post) => (
						<article key={post.id} className="flex max-w-xl flex-col items-start">
							<a href={post.url} target="_blank" rel="noopener noreferrer">
								<Image width={500} height={200} className="rounded-xl" src={post.cover_image} alt={post.title}/>
							</a>
							<div className="flex items-start gap-x-4 text-xs px-2 mt-2">
								<time dateTime={post.published_at} className="text-gray-500">
									{post.readable_publish_date}
								</time>
							</div>
							<div className="flex items-start gap-x-2 text-xs pt-2">
								{post.tag_list.map((tag) => (
									<div
										key={tag}
										className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
									>
										#{tag}
									</div>
								))}
							</div>
							<div className="group relative">
								<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<a href={post.url} target="_blank" rel="noopener noreferrer">
										<span className="absolute inset-0" />
										{post.title}
									</a>
								</h3>
								<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 font-body">{post.description}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
