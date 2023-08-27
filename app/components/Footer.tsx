import Image from 'next/image';

type State = {
    isHomePage: boolean
}
export default function Footer({ isHomePage }: State) {
	return (
		<footer>
			<div className="w-full max-w-screen-2xl bg-white mx-auto p-4 px-6 md:py-8">

				{!isHomePage && (
					<>
						<div className="flex flex-col items-start justify-start sm:flex ">
							<a href="/" className="flex items-center mb-1">
								<Image width={50} height={48} src="/images/profile.svg" className="h-12 mr-2" alt="Logo" />
								<span className="self-center text-xl whitespace-nowrap">Akash</span>
							</a>
							{/*Social Media Icons */}
							<ul aria-label="Social media" role="list" className="flex space-x-4 pl-2">
								<li className="text-gray-500 w-6 h-6">
									<a href="https://www.linkedin.com/in/akashdathan/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
										<Image width={24} height={24} src="/images/linkedin.svg" alt="Linkedin Logo"/>
									</a>
								</li>
								<li className="text-gray-500 w-6 h-6">
									<a href="https://github.com/akashdathan" target="_blank" rel="noopener noreferrer" aria-label="Github">
										<Image width={24} height={24} src="/images/github.svg" alt="Github Logo"/>
									</a>
								</li>
								<li className="text-gray-500 w-6 h-6">
									<a href="https://twitter.com/akash_dathan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
										<Image width={24} height={24} src="/images/twitter.svg" alt="Twitter Logo"/>
									</a>
								</li>
								<li className="text-gray-500 w-6 h-6">
									<a href="https://www.instagram.com/akash_dathan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
										<Image width={24} height={24} src="/images/instagram.svg" alt="Instagram Logo"/>
									</a>
								</li>
							</ul>
						</div>

						<hr className="my-6 sm:mx-auto" />
					</>
				)}

				<div className="w-full mx-auto md:flex md:items-center md:justify-between">
					<span className="flex flex-wrap text-md lg:text-md text-font-grey justify-center md:justify-start">© 2023 Akash. All Rights Reserved.</span>
					<ul className="flex flex-wrap items-center mt-1 text-md md:text-md font-medium text-font-grey justify-center md:justify-start">
						<li>
							<a href="#">Privacy Policy</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
