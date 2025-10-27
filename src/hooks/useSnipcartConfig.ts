import { useEffect } from 'react'

export function useSnipcartConfig() {
  useEffect(() => {
    const applyConfig = () => {
      const { Snipcart } = window as any
      if (!Snipcart?.store) return

      Snipcart.store.dispatch('cart.setConfig', {
        open_cart_on_add: false, // 👈 disables auto open
      })

      console.log('✅ Snipcart config applied: open_cart_on_add = false')
    }

    if ((window as any).Snipcart?.store) {
      // Snipcart already ready
      applyConfig()
    } else {
      // Wait until Snipcart finishes loading
      document.addEventListener('snipcart.ready', applyConfig)
    }

    return () => {
      document.removeEventListener('snipcart.ready', applyConfig)
    }
  }, [])
}
