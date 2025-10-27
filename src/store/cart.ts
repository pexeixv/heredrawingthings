import { atom } from 'jotai'

export const cartCountAtom = atom(0)
export const cartTotalAtom = atom(0)

export const syncWithSnipcart = () => {
  if (typeof window !== 'undefined' && window.Snipcart) {
    return window.Snipcart.store.getState().cart
  }
  return { items: { count: 0 }, total: 0 }
}
