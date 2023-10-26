import React from 'react'
import Image from 'next/image'

type Props = {}
const mobileImgs = [
    { imgName: 'DEEP EARTH', src: '/images/mobile/image-deep-earth.jpg', alt: 'earth' },
    { imgName: 'NIGHT ARCADE ', src: '/images/mobile/image-night-arcade.jpg', alt: 'arcade' },
    { imgName: 'SOCCER TEAM VR', src: '/images/mobile/image-soccer-team.jpg', alt: 'soccer' },
    { imgName: 'THE GRID ', src: '/images/mobile/image-grid.jpg', alt: 'grid' },
    { imgName: 'FROM UP ABOVE VR', src: '/images/mobile/image-from-above.jpg', alt: 'above' },
    { imgName: 'POCKET BOREALIS', src: '/images/mobile/image-pocket-borealis.jpg', alt: 'borealis' },
    { imgName: 'THE CURIOSITY', src: '/images/mobile/image-curiosity.jpg', alt: 'curiosity' },
    { imgName: 'MAKE IT FISHEYE', src: '/images/mobile/image-fisheye.jpg', alt: 'fisheye' },
]

export default function ImageBlock({ }: Props) {
    return (
        <div className="flex flex-col items-center gap-2 w-full p-4">
            {mobileImgs.map((icon) => (
                <div className="relative w-full">
                    <Image key={icon.alt}
                        src={icon.src}
                        alt={icon.alt}
                        width={100}
                        height={100}
                        className='w-full'
                    />
                    <p className="absolute text-white shadow-md font-JosefinSans z-10 text-[35px] p-10 top-0 w-60 -left-5">{icon.imgName}</p>
                </div>
            ))}

        </div>
    )
}


// import React from 'react'
// import Image from 'next/image'
// import earth from '/images/mobile/image-deep-earth.jpg'
// import arcade from '/images/mobile/image-night-arcade.jpg'
// import soccer from '/images/mobile/image-soccer-team.jpg'
// import grid from '/images/mobile/image-grid.jpg'
// import above from '/images/mobile/image-from-above.jpg'
// import borealis from '/images/mobile/image-pocket-borealis.jpg'
// import curiosity from '/images/mobile/image-curiosity.jpg'
// import fisheye from '/images/mobile/image-fisheye.jpg'
// type Props = {}
// const mobileImgs = [
//     { imgName: 'DEEP EARTH', mobileSrc:  'earth' , alt: 'earth' },
//     { imgName: 'NIGHT ARCADE ', mobileSrc: arcade, alt: 'arcade' },
//     { imgName: 'SOCCER TEAM VR', mobileSrc: soccer, alt: 'soccer' },
//     { imgName: 'THE GRID ', mobileSrc: grid, alt: 'grid' },
//     { imgName: 'FROM UP ABOVE VR', mobileSrc: above, alt: 'above' },
//     { imgName: 'POCKET BOREALIS', mobileSrc: borealis, alt: 'borealis' },
//     { imgName: 'THE CURIOSITY', mobileSrc: curiosity, alt: 'curiosity' },
//     { imgName: 'MAKE IT FISHEYE', mobileSrc: fisheye, alt: 'fisheye' },
// ]

// export default function ImageBlock({ }: Props) {
//     return (
//         <div className="flex flex-col items-center gap-2 w-full p-4">
//             {mobileImgs.map((icon) => (
//                 <div className="relative w-full">
//                     <Image key={icon.alt}
//                         src={icon.mobileSrc}
//                         alt={icon.alt}
//                         width={100}
//                         height={100}
//                         className='w-full'
//                     />
//                     <p className="absolute text-white shadow-md font-JosefinSans z-10 text-[35px] p-10 top-0 w-60 -left-5">{icon.imgName}</p>
//                 </div>
//             ))}

//         </div>
//     )
// }