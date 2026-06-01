interface LazyImageProps {
  src: string
  alt: string
  className?: string
  fetchpriority?: 'high' | 'low' | 'auto'
  width?: number | string
  height?: number | string
  decoding?: 'async' | 'sync' | 'auto'
  onError?: () => void
}

function buildSrcSet(src: string): string | undefined {
  if (!src || src.startsWith('data:') || src.startsWith('blob:') || src.startsWith('http')) return
  if (!/^\/(home|galeria|servicios|djs|covers)\//.test(src)) return
  const lastDot = src.lastIndexOf('.')
  if (lastDot === -1) return
  const base = src.slice(0, lastDot)
  const ext = src.slice(lastDot)
  return `${base}_400${ext} 400w, ${base}_800${ext} 800w, ${base}_1200${ext} 1200w`
}

export function LazyImage({ src, alt, className, fetchpriority, width, height, decoding = 'async', onError }: LazyImageProps) {
  const isCritical = fetchpriority === 'high'

  return (
    <img
      src={src}
      alt={alt}
      fetchpriority={isCritical ? 'high' : undefined}
      loading={isCritical ? undefined : 'lazy'}
      decoding={decoding}
      width={width}
      height={height}
      srcSet={import.meta.env.PROD ? buildSrcSet(src) : undefined}
      sizes={import.meta.env.PROD ? "(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px" : undefined}
      onError={onError}
      className={className}
    />
  )
}
