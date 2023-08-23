
export default function Footer() {
  return (
      <footer>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex flex-col items-start justify-start sm:flex ">
            <a href="/" className="flex items-center mb-1">
              <img src="/images/profile.svg" className="h-12 mr-2" alt="Logo" />
              <span className="self-center text-xl whitespace-nowrap">Akash</span>
            </a>
            {/*Social Media Icons */}
            <ul aria-label="Social media" role="list" className="flex space-x-4 pl-2">
              <li className="text-gray-500 w-6 h-6">
                <a href="https://www.linkedin.com/in/akashdathan/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                  <img src="/images/linkedin.svg" alt="Linkedin Logo"/>
                </a>
              </li>
              <li className="text-gray-500 w-6 h-6">
                <a href="https://github.com/akashdathan" target="_blank" rel="noopener noreferrer" aria-label="Github">
                  <img src="/images/github.svg" alt="Github Logo"/>
                </a>
              </li>
              <li className="text-gray-500 w-6 h-6">
                <a href="https://twitter.com/akash_dathan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <img src="/images/twitter.svg" alt="Twitter Logo"/>
                </a>
              </li>
              <li className="text-gray-500 w-6 h-6">
                <a href="https://www.instagram.com/akash_dathan/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src="/images/instagram.svg" alt="Instagram Logo"/>
                </a>
              </li>
            </ul>
          </div>

          <hr className="my-6 sm:mx-auto" />
          <div className="w-full mx-auto lg:px-20 md:px-10 md:flex md:items-center md:justify-between">
            <span className="flex flex-wrap text-md lg:text-md text-font-grey justify-center md:justify-start">© 2023 Akash. All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-1 text-md md:text-md font-medium text-font-grey justify-center md:justify-start">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  )
}
