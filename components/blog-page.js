// app/page.js
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div>
      <div className='max-w-4xl text-center justify-center mx-auto'>
        <h2 className='title no-underline text-center justify-center mx-auto py-2'>Blog Posts</h2>
        <ul className='flex flex-col md:flex-row mx-auto justify-center justify-items-center '>
          {posts.map(post => (
            <li key={post.slug} className='text-center justify-evenly mx-auto py-4'>
              <a href={`/posts/${post.slug}`} className='text-lg'>{post.title}</a>
              <p className='text-sm' >{post.author}</p>
              <p className='text-xs text-slate-600' >{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
