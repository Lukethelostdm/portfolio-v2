import Intro from '@/components/intro'
import Project from '@/components/projects'
import TechStack from '@/components/tech-stack'
import GetLatestPosts from '@/components/latest-posts'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
      </div>
      <Project/>
      <TechStack />
      <GetLatestPosts/>
    </section>
  )
}