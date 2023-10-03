import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
      <div className='flex my-auto mx-auto h-[100vh]'>
        <h1 className='text-gray-600 text-center text-8xl my-auto mx-auto'>Hello, World!</h1>
      </div>
    </>
  )
}
