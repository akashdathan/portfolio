import Header from '../components/header'

export default function Example() {

  return (
      <div className="bg-white flex flex-col min-h-screen font-display">
        <Header />

        <main className="flex-grow flex items-center justify-center">
          <div className="flex flex-col md:flex-row relative px-4 sm:px-6 md:px-16 lg:px-24">
            <div className="w-full md:w-1/2 mx-auto max-w-2xl">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl tracking-wide text-left pt-10">
                  Hey,
                  <br />
                  I'm Akash.
                </h1>
                <p className="mt-4 text-xl leading-8 text-font-grey pr-10 py-6">
                  In the realm of software, I value simplicity, elegance, and uncompromised performance.
                </p>

                {/*Social Media Icons */}
                <ul aria-label="Social media" role="list" className="flex space-x-4 pl-0 pt-5">
                  <li className="text-gray-500">
                    <a href="https://www.linkedin.com/in/akashdathan/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                      <img src="/images/linkedin.svg" alt="Linkedin Logo"/>
                    </a>
                  </li>
                  <li className="text-gray-500">
                    <a href="https://github.com/akashdathan" target="_blank" rel="noopener noreferrer" aria-label="Github">
                      <img src="/images/github.svg" alt="Github Logo"/>
                    </a>
                  </li>
                  <li className="text-gray-500">
                    <a href="https://twitter.com/akash_dathan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <img src="/images/twitter.svg" alt="Twitter Logo"/>
                    </a>
                  </li>
                  <li className="text-gray-500">
                    <a href="https://www.instagram.com/akash_dathan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <img src="/images/instagram.svg" alt="Instagram Logo"/>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/newspaper.svg" alt="Newspaper" className="mx-auto md:max-w-md lg:max-w-lg xl:max-w-2xl" />
            </div>
          </div>
        </main>

        {/*Custom Footer*/}
        <footer className="flex-grow flex items-end justify-center lg:px-8">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="flex flex-wrap text-md lg:text-md text-font-grey justify-center md:justify-start">© 2023 Akash. All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-1 text-md md:text-md font-medium text-font-grey justify-center md:justify-start">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>

      </div>
  )
}
