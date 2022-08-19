import type { NextPage, GetServerSideProps } from 'next'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Recently from '../components/Recently'
import { sanityClient } from "../sanity"
import { Post, Posts } from '../typings'

const Home: NextPage<Posts> = ({ posts }: Posts) => {
  return (
    <div className=' mx-auto'>
      <Header transparent={false} />
      <Hero />
      <Recently posts={posts} />
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const query = `*[_type=="post"] | order(_createdAt desc) {
    _id,
    title,
    author -> {
    name,
    image,
  },
  description,
  mainImage,
  slug,
  _createdAt
  }`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  }
}
