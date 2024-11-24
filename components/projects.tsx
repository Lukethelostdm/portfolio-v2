import React from 'react'
import Link from 'next/link'

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
    description: 'Building an artist gallery with cloudinary',
    link: '/posts/Art-Gallery',
    tags: ['React']
  },
  {
    image: '/post-images/author.png',
    title: 'Author',
    description: 'Building a website to client specs.',
    link: '/posts/Author',
    tags: ['CSS', 'Javascript']
  },

]

const tagStyles: Record<string, string> = {
  HTML: 'bg-blue-100 text-blue-600',
  CSS: 'bg-green-100 text-green-600',
  Javascript: 'bg-yellow-100 text-yellow-600',
  React: 'bg-purple-100 text-purple-600'
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
    <div className='mx-auto max-w-6xl py-8'>
      <h2 className='mb-8 text-center text-3xl font-bold dark:text-white'>
        Projects
      </h2>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800'
          >
            <img
              src={project.image}
              alt={project.title}
              className='h-48 w-full object-cover'
            />
            <h2 className='p-4 text-lg font-semibold text-gray-800 transition-colors hover:text-blue-500 dark:text-white'>
              {project.title}
            </h2>
            <p className='p-4'>{project.description}</p>
            <ProjectTags tags={project.tags} />
            <Link href={project.link}
               className='p-4'>View Case Study
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
