import Intro from '@/components/intro'
import Image from 'next/image'
import BlogHome from '@/components/blog-page'
import Project from '@/components/projects'
import TechStack from '@/components/tech-stack'
import ContactForm from '@/components/contact-form'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
      </div>
      <ContactForm/>
      <Project/>
      <TechStack />
      <BlogHome/>
      
    </section>
  )
}