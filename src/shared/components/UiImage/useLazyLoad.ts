export function useLazyLoad(imageRef: Ref<HTMLImageElement | null>, rootMargin = '300px') {
  const observer = ref<IntersectionObserver | null>(null)

  const initLazyLoad = () => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const src = img.dataset.src

            if (src) {
              img.src = src // Заменяем плейсхолдер реальным изображением
              img.removeAttribute('data-src') // Убираем data-src
            }

            observer.value?.unobserve(img) // Перестаём наблюдать за элементом
          }
        })
      },
      {
        root: null, // Используем viewport как root
        rootMargin, // Расширяем область видимости
        threshold: 0.1, // Загружаем, когда хотя бы 10% элемента в зоне видимости
      }
    )

    if (imageRef.value) observer.value?.observe(imageRef.value)
  }

  const destroyLazyLoad = () => {
    observer.value?.disconnect()
    observer.value = null
  }

  return {
    initLazyLoad,
    destroyLazyLoad,
  }
}
