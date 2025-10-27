import { useEffect } from 'react'
import { useSetAtom } from 'jotai'
import { cartCountAtom, cartTotalAtom } from '@/store/cart'

export function useSnipcartCartSync() {
  const setCartCount = useSetAtom(cartCountAtom)
  const setCartTotal = useSetAtom(cartTotalAtom)

  useEffect(() => {
    const handleSnipcartReady = () => {
      const { Snipcart } = window as any
      if (!Snipcart?.store) return

      // Initial values
      const state = Snipcart.store.getState()
      setCartCount(state.cart.items.count)
      setCartTotal(state.cart.total)

      // Subscribe to changes
      const unsubscribe = Snipcart.store.subscribe(() => {
        const newState = Snipcart.store.getState()
        setCartCount(newState.cart.items.count)
        setCartTotal(newState.cart.total)
      })

      return unsubscribe
    }

    if ((window as any).Snipcart?.store) {
      handleSnipcartReady()
    } else {
      document.addEventListener('snipcart.ready', handleSnipcartReady)
    }

    return () => {
      document.removeEventListener('snipcart.ready', handleSnipcartReady)
    }
  }, [setCartCount, setCartTotal])
}
