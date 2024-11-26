import { getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown'; 
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import Image from 'next/image';


export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function fetchPost(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export default async function Post({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }


  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 my-20">
      {/* Back Button */}
      <Link
        href="/case-study"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors"
      >
        ← Back to studies
      </Link>

      {/* Featured Image */}
      {post.img && (
        <Image
          src={post.img}
          alt={post.title}
          width={600}
              height={400}
              layout="responsive"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
        {post.title}
      </h1>

      {/* Metadata */}
      <p className="text-sm text-gray-500 mb-6">
        By <span className="font-medium text-gray-700">{post.author}</span> |{' '}
        {new Date(post.date).toLocaleDateString()}
      </p>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert">
        <Markdown rehypePlugins={[rehypeRaw]}>{post.content}</Markdown>
      </div>
    </div>
  );
}
