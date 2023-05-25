import Image from 'next/image';
import Link from 'next/link';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';

const links = [
  {
    'icon': <AiFillFacebook size='30' color='#3b5998' />,
    'location': 'https://fb.com/winprn',
  },
  {
    'icon': <AiFillGithub size='30' color='#171515' />,
    'location': 'https://github.com/winprn',
  },
]

export default function Home() {
  return (
    <main className="w-full max-w-2xl bg-slate-50 px-4 py-4">
      <section className='flex flex-col items-center gap-2 mb-3'>
        <div><Image src='/avatar.png' width='80' height='80' alt='avatar' /></div>
        <div className='text-center'>
          <h1 className='text-2xl'>L. D. Minh Man</h1>
          <h2 className='text-lg'>@winprn</h2>
          <p>I'm a freshman studying Information & Technology in VNU-HCMUS</p>
        </div>
      </section>
      <section className='flex flex-col items-center mb-4'>
        <Link className='inline-block px-3 py-2 bg-green-400 font-normal rounded-md hover:bg-green-300 transition-all' href={'/'}>My resume</Link>
      </section>
      <p className='text-center'>Don't forget to checkout my <Link className='text-blue-500' href='/blog'>blog</Link></p>
      <section className='flex justify-center'>
        {
          links.map((el, index) => {
            return <a key={index} href={el.location}>
              <span>{el.icon}</span>
            </a>
          })
        }
      </section>
    </main>
  )
}
