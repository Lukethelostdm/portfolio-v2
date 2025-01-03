import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


interface Project {
  image: string
  title: string
  description: string
  link: string
  tags: string[]
}

const projects: Project[] = [
  {
    image: '/post-images/portfolio.PNG',
    title: 'Portfolio V1',
    description:
      'This is my first portfolio website, in comparison to the current one.',
    link: '/posts/Portfolio',
    tags: ['HTML']
  },
  {
    image: '/post-images/gallery.png',
    title: 'Art Gallery',
    description: 'Building an artist gallery with Cloudinary.',
    link: '/posts/Art-Gallery',
    tags: ['React']
  },
  {
    image: '/post-images/author.png',
    title: 'Author Site',
    description: 'Building a website for an author.',
    link: '/posts/Author',
    tags: [ 'HTML', 'CSS', 'Javascript']
  },
  {
    image: '/post-images/panda.png',
    title: 'PingPanda SaaS',
    description: 'Building a full stack Saas',
    link: '/posts/Panda',
    tags: [ 'React', 'Database', 'Fullstack' ]
  },
 

]

const tagStyles: Record<string, string> = {
  HTML: 'bg-blue-100 text-blue-600 my-4',
  CSS: 'bg-green-100 text-green-600 my-4',
  Javascript: 'bg-yellow-100 text-yellow-600 my-4',
  React: 'bg-purple-100 text-purple-600 my-4',
  Next: 'bg-orange-100 text-orange-600 my-4',
  Jstack: 'bg-red-100 text-red-600 my-4',
  API: 'bg-pink-100 text-pink-600 my-4',
  Database: 'bg-teal-100 text-teal-600 my-4',
  Fullstack: 'bg-cyan-100 text-cyan-600 my-4',

  // Add more tags and styles as needed
}

interface ProjectTagsProps {
  tags: string[]
}

const ProjectTags: React.FC<ProjectTagsProps> = ({ tags }) => {
  return (
    <div className='flex space-x-2'>
      {tags.map((tag: string) => (
        <span
          key={tag}
          className={`${tagStyles[tag] || 'bg-gray-100 text-gray-600'} mx-2 rounded-full px-3 py-1 text-xs font-semibold`}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default function Project() {
  return (
    <div className='mx-4 max-w-6xl sm:mx-auto'>
      <h2 className='mb-8 text-center text-3xl font-bold dark:text-white'>
        Projects
      </h2>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800'
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              layout="responsive"
            />
            <h2 className='px-4 pt-2 text-lg font-semibold text-gray-800 transition-colors hover:text-blue-500 dark:text-white'>
              {project.title}
            </h2>
            <p className='px-4 py-2'>{project.description}</p>
            <ProjectTags tags={project.tags} />
            <Link href={project.link}
               className='p-4 hover:underline flex flex-row '>View Case Study <svg
               xmlns='http://www.w3.org/2000/svg'
               width='12em'
               height='2em'
             >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
