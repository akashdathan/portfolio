// import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
// import Intro from '../components/intro'
// import Layout from '../components/layout'
// import { getAllPostsForHome } from '../lib/api'
// import Head from 'next/head'
// import { CMS_NAME } from '../lib/constants'
//
// export default function Index({ preview, allPosts }) {
//   const heroPost = allPosts[0]
//   const morePosts = allPosts.slice(1)
//   return (
//     <>
//       <Layout preview={preview}>
//         <Head>
//           <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
//         </Head>
//         <Container>
//           <Intro />
//           {heroPost && (
//             <HeroPost
//               title={heroPost.title}
//               coverImage={heroPost.coverImage}
//               date={heroPost.date}
//               author={heroPost.author}
//               slug={heroPost.slug}
//               excerpt={heroPost.excerpt}
//             />
//           )}
//           {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//         </Container>
//       </Layout>
//     </>
//   )
// }
//
// export async function getStaticProps({ preview = false }) {
//   const allPosts = (await getAllPostsForHome(preview)) ?? []
//   return {
//     props: { preview, allPosts },
//   }
// }

import Header from '../components/header'

export default function Example() {

  return (
      <div className="bg-white flex flex-col min-h-screen">
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
                  Building software that embody a blend of simplicity and elegance without compromising on performance.
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
        <footer className="bg-white px-16">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-md lg:text-md text-font-grey sm:text-center">© 2023 Akash. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-md md:text-md font-medium text-font-grey sm:mt-0">
              <li>
                <a href="#" className="mr-4 md:mr-6">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
  )
}
