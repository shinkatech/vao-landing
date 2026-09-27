import { useEffect } from 'react'

/**
 * Revela os elementos com a classe `.reveal` quando entram na tela.
 * Um único observer para a página inteira; cada elemento é observado uma vez só.
 */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return

    const root = document.documentElement
    root.classList.add('reveal-ready')

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}
