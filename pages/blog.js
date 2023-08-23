import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

export default function Blog({ preview, allPosts }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blog</title>
        </Head>
          <div className="bg-white py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl lg:mx-0">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
                      <p className="mt-2 text-xl leading-8 text-gray-600">
                          Here, I unravel the intricacies of software development, drawing from my passion for simplicity, elegance, and robust performance.
                      </p>
                  </div>

                  <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                      {allPosts.map((post) => (
                          <article className="flex max-w-xl flex-col items-start justify-between">
                              <a href={`/blog/${post.slug}`}>
                                  <img className="rounded-xl" src={post.coverImage?.url} alt={post.title}/>
                              </a>
                              <div className="flex items-center gap-x-4 text-xs">
                                  <time dateTime={post.date} className="text-gray-500 mt-2">
                                      {new Date(post.date).toDateString()}
                                  </time>
                              </div>
                              <div className="group relative">
                                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                      <a href={`/blog/${post.slug}`}>
                                          <span className="absolute inset-0" />
                                          {post.title}
                                      </a>
                                  </h3>
                                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 font-body">{post.excerpt}</p>
                              </div>
                          </article>
                      ))}
                  </div>
              </div>
          </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []

  return {
    props: { preview, allPosts },
  }
}
