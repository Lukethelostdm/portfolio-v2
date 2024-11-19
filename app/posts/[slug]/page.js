import MarkdownIt from 'markdown-it';
import { getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown'; // Markdown renderer
import rehypeRaw from 'rehype-raw';

const md = new MarkdownIt();

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

  const htmlContent = md.render(post.content);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 my-20">
      {/* Back Button */}
      <a
        href="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors"
      >
        ← Back to Blog
      </a>

      {/* Featured Image */}
      {post.img && (
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
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
