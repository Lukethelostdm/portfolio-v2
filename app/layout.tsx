import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Luke Mcnicol the Web Developer',
  description: 'Freelance web developer, building your dream websites and applications.',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='flex min-h-screen flex-col'>
        <Providers>
          <Header />
          <main className='grow'>
            {children}
            </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
