import ImageBlock from '@/components/ImageBlock'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col relative ">

      <Image src={'/images/mobile/image-hero.jpg'} alt={''} className='w-full ' width={100} height={100} />
      <div className="flex flex-col gap-40  p-8 text-white top-4 absolute w-full h-screen ">
        <div className="flex justify-between w-full z-30 ">
          <Link href={'/'}>   <Image src={'/images/logo.svg'} alt={'/images/logo.svg'} width={140} height={140} className='' /></Link>
          <Image src={'/images/icon-hamburger.svg'} alt={'/images/logo.svg'} width={30} height={30} className='' />
          <Image src={'/images/icon-close.svg'} alt={'close'} width={30} height={30} className='hidden' />
        </div>
        <div className='border-2 text-left top-64 text-5xl p-8 left-2 font-JosefinSans z-0 flex'>IMMERSIVE EXPERIENCES THAT DELIVER</div>


      </div>
      <Image src={'/images/mobile/image-interactive.jpg'} alt={''} className='w-full p-4 mt-14 ' width={100} height={100} />
      <div className="flex flex-col p-12 text-center gap-4  font-JosefinSans"><div className='   text-4xl  '>The LEADER IN INTTERACTIVE VR </div>
        <p className="font-JosefinSans font-semibold text-darkGray text-lg">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. </p></div>
      <div className="flex flex-col w-full items-center gap-8">
        <div className='   text-4xl text-center font-JosefinSans  '>OUR CREATIONS</div>
        <ImageBlock />
        <p className="border-2 p-2 px-8 text-center border-black justify-center font-JosefinSans font-semibold">SEE ALL</p>
      </div>
      <div className="flex flex-col bg-black text-white items-center gap-10 p-10 mt-10 font-semibold font-JosefinSans">
        <Image src={'/images/logo.svg'} alt={'/images/logo.svg'} width={140} height={140} className='' />
        <ul className="flex gap-4 flex-col items-center justify-center ">
          <tr>About</tr>
          <tr>Carrers</tr>
          <tr>Events</tr>
          <tr>Products</tr>
          <tr>Support</tr>
        </ul>

        <div className="flex flex-col items-center gap-4 ">
          <div className="flex  gap-4 items-center ">
            <Link href={'/'}>   <Image src={'/images/icon-facebook.svg'} alt={''} width={30} height={30} className='' /></Link>
            <Link href={'/'}>        <Image src={'/images/icon-twitter.svg'} alt={''} width={30} height={30} className='' /></Link>
            <Link href={'/'}><Image src={'/images/icon-pinterest.svg'} alt={''} width={30} height={30} className='' /></Link>
            <Link href={'/'}> <Image src={'/images/icon-instagram.svg'} alt={''} width={30} height={30} className='' /></Link>

            {/* <Image src={'/images/icon-facebook.svg'} alt={''} width={40} height={40} className='' /> */}
            {/* <Image src={'/images/icon-twitter.svg'} alt={''} width={40} height={40} className='' /> */}
            {/* <Image src={'/images/icon-pinterest.svg'} alt={''} width={40} height={40} className='' /> */}
            {/* <Image src={'/images/icon-instagram.svg'} alt={''} width={40} height={40} className='' /> */}
          </div>

          <p className="text-darkGray">2021 Loopstudios. All right reseved.</p>
        </div>
      </div>

      <div className="absolute bg-black w-full min-h-full z-20 justify-start flex items-start p-8 ">
        <ul className="flex gap-4 flex-col items-start  justify-center text-white w-full mt-28 text-xl font-JosefinSans">
          <tr>ABOUT</tr>
          <tr>CAREERS</tr>
          <tr>EVENTS</tr>
          <tr>PRODUCTS</tr>
          <tr>SUPPORT</tr>
        </ul>
      </div>
    </div>
  )
}
