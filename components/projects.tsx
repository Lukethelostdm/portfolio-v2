import React from 'react';

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    image: 'path/to/project1/image.jpg',
    title: 'Project 1',
    description: 'This is a description of project 1.',
    link: 'link/to/project1/case-study',
    tags: ['HTML'] 
  },
  {
    image: '/post-images/writing.jpg',
    title: 'Project 2',
    description: 'This is a description of project 2.',
    link: 'link/to/project2/case-study',
    tags: ['CSS', 'Javascript'] 
  },
  {
    image: 'path/to/project3/image.jpg',
    title: 'Project 3',
    description: 'This is a description of project 3.',
    link: 'link/to/project3/case-study',
    tags: ['React'] 
  }
];

const tagStyles: Record<string, string> = {
  HTML: 'bg-blue-100 text-blue-600',
  CSS: 'bg-green-100 text-green-600',
  JavaScript: 'bg-red-100 text-red-600',
  React: 'bg-purple-100 text-purple-600',
  // Add more tags and styles as needed
};

interface ProjectTagsProps {
  tags: string[];
}

const ProjectTags: React.FC<ProjectTagsProps> = ({ tags }) => {
  return (
    <div className="flex space-x-2">
      {tags.map((tag: string) => (
        <span
          key={tag}
          className={`${tagStyles[tag] || 'bg-gray-100 text-gray-600'} text-xs font-semibold py-1 px-3 rounded-full mx-2`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default function Project() {
  return (
    <div className='mx-auto max-w-6xl py-8'>
      <h2 className='mb-8 text-center text-3xl font-bold dark:text-white'>
        Projects
      </h2>
      <div className='lg grid grid-cols-1 gap-4 md:grid-cols-2'>
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
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='p-4'
            >
              View Case Study
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}