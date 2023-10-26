import ImageBlock from '@/components/ImageBlock'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col relative ">

      <Image src={'/images/mobile/image-hero.jpg'} alt={''} className='w-full ' width={100} height={100} />
      <div className="flex flex-col gap-40 z-10 p-4 text-white top-4 absolute w-full h-screen ">
        <div className="flex justify-between w-full ">
          <Image src={'/images/logo.svg'} alt={'/images/logo.svg'} width={140} height={140} className='' />
          <Image src={'/images/icon-hamburger.svg'} alt={'/images/logo.svg'} width={30} height={30} className='' />
        </div>
        <div className='border-2 text-left top-64 text-5xl p-8 left-2 font-JosefinSans'>IMMERSIVE EXPERIENCES THAT DELIVER</div>


      </div>
      <Image src={'/images/mobile/image-interactive.jpg'} alt={''} className='w-full p-4 mt-14 ' width={100} height={100} />
      <div className="flex flex-col p-12 text-center gap-4  font-JosefinSans"><div className='   text-4xl  '>The LEADER IN INTTERACTIVE VR </div>
        <p className="font-JosefinSans font-semibold text-darkGray text-lg">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. </p></div>
      <div className="flex flex-col">
        <div className='   text-4xl text-center font-JosefinSans  '>OUR CREATIONS</div>
        <ImageBlock />
        <p className="border-2 p-2 px-4 text-center border-black">SEE ALL</p>
      </div>
    </div>
  )
}
