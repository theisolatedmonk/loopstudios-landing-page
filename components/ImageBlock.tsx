import React from 'react'
import Image from 'next/image'

type Props = {}
const mobileImgs = [
    { src: '/images/mobile/image-deep-earth.jpg', alt: 'earth' },
    { src: '/images/mobile/image-night-arcade.jpg', alt: 'arcade' },
    { src: '/images/mobile/image-soccer-team.jpg', alt: 'soccer' },
    { src: '/images/mobile/image-grid.jpg', alt: 'grid' },
    { src: '/images/mobile/image-from-above.jpg', alt: 'above' },
    { src: '/images/mobile/image-pocket-borealis.jpg', alt: 'borealis' },
    { src: '/images/mobile/image-curiosity.jpg', alt: 'curiosity' },
    { src: '/images/mobile/image-fisheye.jpg', alt: 'fisheye' },
]

export default function ImageBlock({ }: Props) {
    return (
        <div className="flex flex-col items-center gap-2 w-full">
            {mobileImgs.map((icon) => (
                <Image key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    width={100}
                    height={100}
                    className='w-full'
                />
            ))}
        </div>
    )
}