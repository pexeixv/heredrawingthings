export interface Window {
  Snipcart?: {
    api: {
      theme: {
        cart: {
          open: () => void
          close: () => void
        }
      }
    }
    store: {
      getState: () => {
        cart: {
          items: {
            count: number
          }
          total: number
        }
      }
      subscribe: (callback: () => void) => void
    }
  }
}
