import MarkdownIt from 'markdown-it';
import { getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

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
    <article>
      <h1>{post.title}</h1>
      <p className="post-meta">{post.date}</p>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}