"use client"
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

type Props = {
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  year?: string
}

export default function MSULCCarousel({ className = '', autoPlay = true, autoPlayInterval = 4000, year = '2025' }: Props) {
  const [images, setImages] = useState<string[]>([])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)
  const [modalHovered, setModalHovered] = useState(false)
  const timer = useRef<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [dragOffset, setDragOffset] = useState(0)
  const dragStartX = useRef<number | null>(null)
  const isDragging = useRef(false)
  const dragThreshold = 80
  const clickPrevent = useRef(false)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch(`/api/msulc/${year}/images`).then(async (res) => {
      if (!mounted) return
      if (!res.ok) {
        setError('Failed to load images')
        setLoading(false)
        return
      }
      const json = await res.json()
      setImages(json.images || [])
      setLoading(false)
    }).catch((e) => {
      if (!mounted) return
      setError((e as Error).message)
      setLoading(false)
    })
    return () => { mounted = false }
  }, [year])

  useEffect(() => {
    if (!autoPlay) return
    if (timer.current) window.clearInterval(timer.current)
    timer.current = window.setInterval(() => {
      setIndex((i) => (images.length ? (i + 1) % images.length : 0))
    }, autoPlayInterval)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [autoPlay, autoPlayInterval, images])

  function prev() {
    setIndex((i) => (images.length ? (i - 1 + images.length) % images.length : 0))
  }

  function next() {
    setIndex((i) => (images.length ? (i + 1) % images.length : 0))
  }

  function openModal(i: number) {
    setModalIndex(i)
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  function modalPrev(e?: React.MouseEvent) {
    e?.stopPropagation()
    setModalIndex((i) => (images.length ? (i - 1 + images.length) % images.length : 0))
  }

  function modalNext(e?: React.MouseEvent) {
    e?.stopPropagation()
    setModalIndex((i) => (images.length ? (i + 1) % images.length : 0))
  }

  // Preload adjacent images for smoother transitions
  useEffect(() => {
    if (!images.length) return
    const prevIdx = (index - 1 + images.length) % images.length
    const nextIdx = (index + 1) % images.length
    const p1 = new window.Image()
    p1.src = `/msulc/${year}/${images[prevIdx]}`
    const p2 = new window.Image()
    p2.src = `/msulc/${year}/${images[nextIdx]}`
  }, [index, images, year])

  // Pointer / touch handlers for swipe
  function onPointerDown(e: React.PointerEvent) {
    isDragging.current = true
    dragStartX.current = e.clientX
    setDragOffset(0)
    clickPrevent.current = false
    const target = e.currentTarget as Element
    try { target.setPointerCapture(e.pointerId) } catch {}
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging.current || dragStartX.current === null) return
    const delta = e.clientX - dragStartX.current
    if (Math.abs(delta) > 5) clickPrevent.current = true
    setDragOffset(delta)
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!isDragging.current || dragStartX.current === null) return
    const delta = e.clientX - dragStartX.current
    isDragging.current = false
    setDragOffset(0)
    dragStartX.current = null
    if (Math.abs(delta) > dragThreshold) {
      if (delta > 0) prev()
      else next()
    }
  }

  // keyboard handlers and body scroll lock when modal is open
  useModalSideEffects(modalOpen, closeModal, modalPrev, modalNext)

  if (loading) return <div className={`w-full ${className}`}><div className="h-64 sm:h-96 rounded-lg bg-midnight-900/5 flex items-center justify-center">Loading images…</div></div>
  if (error) return <div className={`w-full ${className}`}><div className="h-64 sm:h-96 rounded-lg bg-midnight-900/5 flex items-center justify-center">Error loading images</div></div>
  if (!images.length) return <div className={`w-full ${className}`}><div className="h-64 sm:h-96 rounded-lg bg-midnight-900/5 flex items-center justify-center">No images found for {year}</div></div>

  return (
    <div className={`w-full ${className}`}>
  <div className="relative w-full h-80 sm:h-[38rem] lg:h-[48rem] rounded-lg overflow-hidden bg-midnight-900/5 shadow">
        <div
          className="flex h-full transition-transform duration-300"
          style={{ transform: `translateX(${(-index * 100) + (dragOffset / (window.innerWidth || 1) * 100)}%)` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {images.map((img, i) => (
            <div
              key={img}
              className="relative flex-shrink-0 w-full h-full flex items-center justify-center overflow-hidden"
              onClick={() => { if (!clickPrevent.current) openModal(i) }}
              onPointerEnter={() => setHoveredIndex(i)}
              onPointerLeave={() => setHoveredIndex(null)}
            >
              {/* Inner wrapper scales with transform so both width & height animate together. */}
              <div
                className="h-full w-full flex items-center justify-center"
                style={{
                  transform: hoveredIndex === i ? 'scale(1)' : 'scale(0.8)',
                  transition: 'transform 220ms cubic-bezier(.2,.9,.2,1)',
                  willChange: 'transform'
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={`/msulc/${year}/${img}`}
                    alt={`MSULC ${img}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 1200px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

  <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-lavender/60">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
  <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-lavender/60">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-transform transform ${i === index ? 'scale-110 bg-lavender' : 'scale-100 bg-white/40'}`}
            />
          ))}
        </div>
      {/* Modal / Lightbox */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeModal() }}
            aria-label="Close"
            className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full"
          >
            ✕
          </button>

          <div
            className="relative max-w-6xl w-full h-[80vh] sm:h-[86vh] lg:h-[92vh] flex items-center"
            onPointerEnter={() => setModalHovered(true)}
            onPointerLeave={() => setModalHovered(false)}
          >
            {/* left click zone (narrower) */}
              <div className="absolute left-0 top-0 h-full w-1/5 z-40 cursor-pointer" onClick={(e) => { e.stopPropagation(); modalPrev(e) }} />
              {/* right click zone (narrower) */}
              <div className="absolute right-0 top-0 h-full w-1/5 z-40 cursor-pointer" onClick={(e) => { e.stopPropagation(); modalNext(e) }} />

            <div className="mx-auto w-full h-full relative flex flex-col items-center justify-center gap-4">
              {/* Panel that visually holds the image and thumbnails. Only this panel changes on hover. */}
              <div className={`mx-auto w-full h-full transition-all duration-200 rounded-2xl overflow-hidden ${modalHovered ? 'p-5 bg-white/10 shadow-2xl backdrop-blur-sm ring-1 ring-lavender/20' : 'p-3 bg-white/5 shadow-lg'}`}>
                <div className="relative w-full h-[85%] flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={`/msulc/${year}/${images[modalIndex]}`}
                      alt={`MSULC ${images[modalIndex]}`}
                      fill
                      sizes="100vw"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <div className="w-full flex items-center justify-center gap-2 overflow-x-auto py-2">
                  {images.map((img, i) => (
                    <button key={img} onClick={(e) => { e.stopPropagation(); setModalIndex(i) }} className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border ${i === modalIndex ? 'border-lavender ring-2 ring-lavender/30 shadow-md' : 'border-transparent'}`}>
                      <Image src={`/msulc/${year}/${img}`} alt={img} fill sizes="80px" style={{ objectFit: 'cover' }} loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); modalPrev(e) }} className="absolute left-20 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-lavender/60">‹</button>
            <button onClick={(e) => { e.stopPropagation(); modalNext(e) }} className="absolute right-20 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-lavender/60">›</button>
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

// keyboard navigation & body scroll lock
function useModalSideEffects(open: boolean, onClose: () => void, onPrev: () => void, onNext: () => void) {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handler)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [open, onClose, onPrev, onNext])
}
