import fs from 'fs'
import path from 'path'

export interface ImageData {
  images: string[]
  year: string
}

export async function getImageList(year: string = '2025'): Promise<string[]> {
  try {
    const dir = path.join(process.cwd(), 'public', 'msulc', year)
    const files = await fs.promises.readdir(dir)
    const images = files.filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
    return images.sort() // Sort for consistent ordering
  } catch (err) {
    console.warn(`Failed to load images for year ${year}:`, err)
    return []
  }
}

export function getImageSrc(year: string, filename: string): string {
  return `/msulc/${year}/${filename}`
}

// Preload images for better performance
export function preloadImages(images: string[], year: string, priority: number = 3): void {
  if (typeof window === 'undefined') return
  
  images.slice(0, priority).forEach((image) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = getImageSrc(year, image)
    document.head.appendChild(link)
  })
}

// Generate image metadata for better SEO and performance
export function generateImageMetadata(images: string[], year: string) {
  return images.map((image, index) => ({
    src: getImageSrc(year, image),
    alt: `MSULC ${year} - Image ${index + 1}`,
    priority: index < 3, // First 3 images get priority loading
  }))
}
