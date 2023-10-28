import Navbar from '@/components/navbar/page'
import Image from 'next/image'

export default function Home() {
  return (
      <main className='flex flex-col justify-center items-center'>
        <Navbar /> 
        <div className='absolute h-[150px] w-[150px] bg-[#7289da] blur-[100px] relative right-[612px] '></div>
        <div className='absolute h-[100px] w-[100px] bg-[#7289da] blur-[100px] relative left-[583px] top-[140px] '></div>
      </main>
  )
}
