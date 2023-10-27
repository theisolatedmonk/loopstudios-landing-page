import React from 'react'
import Image from 'next/image'

type Props = {}

const mobileImgs = [
    { imgName: 'DEEP EARTH', src: '/images/desktop/image-deep-earth.jpg', alt: 'earth' },
    { imgName: 'NIGHT ARCADE ', src: '/images/desktop/image-night-arcade.jpg', alt: 'arcade' },
    { imgName: 'SOCCER TEAM VR', src: '/images/desktop/image-soccer-team.jpg', alt: 'soccer' },
    { imgName: 'THE  GRID ', src: '/images/desktop/image-grid.jpg', alt: 'grid' },
    { imgName: 'FROM UP ABOVE VR', src: '/images/desktop/image-from-above.jpg', alt: 'above' },
    { imgName: 'POCKET BOREALIS', src: '/images/desktop/image-pocket-borealis.jpg', alt: 'borealis' },
    { imgName: 'THE CURIOSITY', src: '/images/desktop/image-curiosity.jpg', alt: 'curiosity' },
    { imgName: 'MAKE IT FISHEYE', src: '/images/desktop/image-fisheye.jpg', alt: 'fisheye' },
]

export default function ImageBlockDesktop({ }: Props) {
    return (
        <div className="grid grid-cols-4 justify-center items-center gap-4 w-full p- px-10 ">
            {mobileImgs.map((icon) => (
                <div className="relative w-auto">
                    <Image key={icon.alt}
                        src={icon.src}
                        alt={icon.alt}
                        width={100}
                        height={100}
                        quality={100}
                        className='w-full'
                    />
                    <p className="absolute text-white  font-JosefinSans z-10 text-[25px] p-10 top-[250px] w-[220px] -left-6">{icon.imgName}</p>
                </div>
            ))}

        </div>
    )
}