'use client'

import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export default function BackgroundCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    fetch('/api/msulc/2025/images')
      .then((res) => res.json())
      .then((data) => {
        if (data.images) {
          setImages(data.images)
        }
      })
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {images.map((image, index) => (
            <div className="embla__slide relative" key={index}>
              <Image
                src={`/msulc/2025/${image}`}
                alt="MSULC 2025"
                fill
                className="object-cover filter blur-sm"
                priority={index < 3} // Preload the first 3 images
                quality={50} // Lower quality for background images
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black/70" />
    </div>
  )
}
