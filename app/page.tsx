import Image from 'next/image';
export default function Home() {
	return (
		<main className="flex-grow flex items-center justify-center">
			<div className="flex flex-col md:flex-row relative px-4 sm:px-6 md:px-16 lg:px-24">
				<div className="w-full md:w-1/2 mx-auto max-w-2xl">
					<div>
						<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-wide text-left pt-10">
                              Hey,
							<br />
                            I&apos;m Akash.
						</h1>
						<p className="text-lg lg:text-xl leading-8 text-font-grey pr-10 py-6 mt-4">
                          In the realm of software, I value simplicity, elegance, and uncompromised performance.
						</p>


						{/*Social Media Icons */}
						<ul aria-label="Social media" role="list" className="flex space-x-4 pl-0 pt-5">
							<li className="text-gray-500">
								<a href="https://www.linkedin.com/in/akashdathan/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
									<Image width={40} height={40} src="/images/linkedin.svg" alt="Linkedin Logo"/>
								</a>
							</li>
							<li className="text-gray-500">
								<a href="https://github.com/akashdathan" target="_blank" rel="noopener noreferrer" aria-label="Github">
									<Image width={40} height={40} src="/images/github.svg" alt="Github Logo"/>
								</a>
							</li>
							<li className="text-gray-500">
								<a href="https://twitter.com/akash_dathan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
									<Image width={40} height={40} src="/images/twitter.svg" alt="Twitter Logo"/>
								</a>
							</li>
							<li className="text-gray-500">
								<a href="https://www.instagram.com/akash_dathan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
									<Image width={40} height={40} src="/images/instagram.svg" alt="Instagram Logo"/>
								</a>
							</li>
						</ul>

					</div>
				</div>
				<div className="w-full md:w-1/2">
					<Image width={512} height={512} src="/images/newspaper.svg" alt="Newspaper" className="mx-auto md:max-w-md lg:max-w-lg xl:max-w-2xl" />
				</div>
			</div>
		</main>
	);
}
