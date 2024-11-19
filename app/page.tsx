import Intro from '@/components/intro'
import Image from 'next/image'
import BlogHome from '@/components/blog-page'
import ProjectPage from '@/components/projects'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
      </div>
      <BlogHome/>
    </section>
  )
}
