import { onMounted, onUnmounted } from 'vue'

export const useScrollAnimations = () => {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    // Small delay to ensure DOM is fully ready
    setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              // Once revealed, stop observing
              observer?.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      )

      // Observe all reveal elements
      document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
        observer?.observe(el)
      })

      // Also observe stagger-grid items (for skills page, etc.)
      document.querySelectorAll('.stagger-grid').forEach((grid) => {
        observer?.observe(grid)
      })
    }, 50)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
