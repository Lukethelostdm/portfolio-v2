import { getAllPosts } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';

export default function LatestPosts() {
  const posts = getAllPosts(); 

  return (
    <section className="max-w-6xl mx-4 sm:mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Latest Studies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
            <Link href={`/posts/${post.slug}`}>
              <Image src={post.img} alt={post.title} width={600}
              height={400}
              layout="responsive"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white text-gray-800 hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Author:</span> {post.author}
                </p>
                <p className="text-xs text-gray-500">{post.date}</p>
                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold mt-4 py-1 px-3 rounded-full">
                  {post.tag}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}