import { useEffect, useState } from 'react'
import { ProductGrid } from '../components/ProductGrid'
import type { Product } from '../types'
import { fetchProducts } from '@/lib/api'
import { Skeleton } from '@/components/ui/skeleton'

function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const data = await fetchProducts()
        setProducts(data)
      } catch (err) {
        console.error('Failed to load products:', err)
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <>
      {loading && (
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-x-6 gap-y-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="w-2/3 h-4 mt-4" />
                <Skeleton className="w-1/3 h-3 mt-2" />
              </div>
            ))}
          </div>
        </section>
      )}
      {error && (
        <section>
          <div className="container mx-auto px-4 py-16 ">
            <p className="text-sm text-red-600 text-center ">{error}</p>
          </div>
        </section>
      )}
      {!loading && !error && <ProductGrid products={products} />}
    </>
  )
}

export default Home
