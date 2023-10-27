'use client'
import ImageBlockMobile from '@/components/ImageBlockMobile'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import hamburger from '@/public/images/icon-hamburger.svg'
import heroMobile from '@/public/images/mobile/image-hero.jpg'
import heroDesktop from '@/public/images/desktop/image-hero.jpg'
import interactiveMobile from '@/public/images/mobile/image-interactive.jpg'
import interactiveDesktop from '@/public/images/desktop/image-interactive.jpg'
import ImageBlockDesktop from '@/components/ImageBlockDesktop'

const navItem = [
  { title: 'ABOUT', href: '/' },
  { title: 'CAREERS', href: '/' },
  { title: 'EVENTS', href: '/' },
  { title: 'PRODUCTS', href: '/' },
  { title: 'SUPPORT', href: '/' }]

const socialMediaIcon = [
  { src: '/images/icon-facebook.svg', href: '/', alt: 'facebook' },
  { src: '/images/icon-twitter.svg', href: '/', alt: 'twitter' },
  { src: '/images/icon-pinterest.svg', href: '/', alt: 'pinterest' },
  { src: '/images/icon-instagram.svg', href: '/', alt: 'instagram' },
]

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col relative shadow-md ">

      <Image src={heroMobile} alt={''} className='w-full sm:hidden' width={100} height={100} quality={100} />
      <Image src={heroDesktop} alt={''} className='w-full hidden sm:flex' width={100} height={100} quality={100} />
      <div className="flex flex-col gap-40  p-8 text-white top-4 absolute w-full h-screen ">
        <div className="flex justify-between w-full z-30 sm:px-12">
          <Link href={'/'}>   <Image src={'/images/logo.svg'} alt={'/images/logo.svg'} width={140} height={140} quality={100} className='' /></Link>
          <Image src={hamburger} alt={'/images/logo.svg'} width={30} height={30} quality={100} className={`${open ? 'hidden' : 'flex'} sm:hidden`} onClick={() => setOpen(true)} />
          <Image src={'/images/icon-close.svg'} alt={'close'} width={30} height={30} quality={100} className={`${open ? 'flex' : 'hidden'}`} onClick={() => setOpen(false)} />

          <ul className="sm:flex gap-2 text-sm   items-center justify-center hidden">

            {navItem.map((item, index) => (<Link className='cursor-pointer hover:border-b-2 hover:border-b-white border-transparent border-b-2' href={item.href}> <tr>{item.title}</tr></Link>))}
          </ul>
        </div>
        <div className='border-2 text-left top-64 text-4xl sm:text-6xl p-8 w-full left-2 font-JosefinSans z-0 flex sm:w-[520px] sm:left-20 sm:absolute sm:top-[155px] 
        '>IMMERSIVE EXPERIENCES THAT DELIVER</div>


      </div>
      <div className="flex flex-col sm:relative h-screen">
        <Image src={interactiveMobile} alt={''} className='w-full p-4 mt-14 sm:hidden  ' width={100} height={100} quality={100} />
        <div className="sm:relative  flex flex-col">
          <Image src={interactiveDesktop} alt={''} className='w-[50%] p-4 mt-14 left-20 sm:flex hidden sm:absolute' width={100} height={100} quality={100} />
        </div>
        <div className="flex flex-col p-12 text-center gap-4  text-sm font-JosefinSans sm:w-[55%] sm:top-48 sm:bg-white sm:absolute sm:left-[480px] sm:p-14 sm:text-left">
          <div className='   text-4xl  '>THE LEADER IN INTTERACTIVE VR </div>
          <p className="font-JosefinSans font-semibold text-darkGray text-lg">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. </p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-8 mt-2">
        <div className="flex justify-center sm:justify-between sm:px-[90px] w-full  items-center">
          <div className='   text-4xl text-center font-JosefinSans  '>OUR CREATIONS</div>
          <button className="border-2 p-2 px-8 text-center border-black justify-center font-JosefinSans font-semibold w-36 sm:flex hidden ">SEE ALL</button>
        </div>

        <div className="flex flex-col w-full justify-center items-center sm:hidden"><ImageBlockMobile />
          <button className="border-2 p-2 px-8 text-center border-black justify-center font-JosefinSans font-semibold w-36 ">SEE ALL</button>
        </div>
        <div className="w-full sm:flex hidden"><ImageBlockDesktop /></div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between bg-black text-white items-center gap-10 p-10 mt-10 font-semibold font-JosefinSans sm:px-20">
        <div className="flex flex-col gap-4">
          <Link href={'/'}>
            <Image src={'/images/logo.svg'} alt={'/images/logo.svg'} width={140} height={140} quality={100} className='' />
          </Link>
          <ul className="flex gap-4 flex-col sm:flex-row items-center justify-center ">

            {navItem.map((item, index) => (<Link className='cursor-pointer text-sm' href={item.href}> <tr>{item.title}</tr></Link>))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end ">
          <div className="flex  gap-4 items-center ">
            {socialMediaIcon.map((item, index) => (<Link href={item.href}>   <Image src={item.src} alt={item.alt} width={30} height={30} quality={100} className='w-5' /></Link>))}

          </div>

          <p className="text-darkGray">2021 Loopstudios. All right reseved.</p>
        </div>
      </div>

      <div className={`absolute bg-black w-full min-h-full z-20 justify-start flex items-start p-8 ${open ? 'flex' : 'hidden'}`}>
        <ul className="flex gap-4 flex-col items-start  justify-center text-white w-full mt-28 text-xl font-JosefinSans">
          {navItem.map((item, index) => (<Link className='cursor-pointer' href={item.href}> <tr>{item.title}</tr></Link>))}

        </ul>
      </div>
    </div>
  )
}
