import Image from 'next/image'
import logo from '@/public/logo.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Luke.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Website Designer and Developer from Leeds, England. I&#39;m passionate about learning all there is to know in this evolving industry and I am always excited to push boundaries and try new things.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={logo}
          alt='Luke'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}