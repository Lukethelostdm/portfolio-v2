import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        width={600}
              height={400}
              layout="responsive"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}