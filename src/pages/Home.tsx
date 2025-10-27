import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { ProductGrid } from '../components/ProductGrid'
import type { Product } from '../types'
import { fetchProducts } from '@/lib/api'
import { Skeleton } from '@/components/ui/skeleton'

// Mock data - replace with Hygraph API calls
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'FLORAL ILLUSTRATION PRINT',
    slug: 'floral-illustration-print',
    price: 45.0,
    images: [
      {
        id: '1',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [{ id: '1', name: 'Prints', slug: 'prints' }],
    soldOut: false,
  },
  {
    id: '2',
    name: 'BOTANICAL SKETCH SET',
    slug: 'botanical-sketch-set',
    price: 65.0,
    salePrice: 52.0,
    images: [
      {
        id: '2',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [
      { id: '1', name: 'Prints', slug: 'prints' },
      { id: '2', name: 'Sale', slug: 'sale' },
    ],
    soldOut: false,
  },
  {
    id: '3',
    name: 'ABSTRACT WATERCOLOR',
    slug: 'abstract-watercolor',
    price: 38.0,
    images: [
      {
        id: '3',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [{ id: '3', name: 'Originals', slug: 'originals' }],
    soldOut: true,
  },
  {
    id: '4',
    name: 'PORTRAIT STUDY',
    slug: 'portrait-study',
    price: 55.0,
    images: [
      {
        id: '4',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [{ id: '3', name: 'Originals', slug: 'originals' }],
    soldOut: false,
  },
  {
    id: '5',
    name: 'LANDSCAPE SERIES NO. 3',
    slug: 'landscape-series-3',
    price: 48.0,
    images: [
      {
        id: '5',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [{ id: '1', name: 'Prints', slug: 'prints' }],
    soldOut: false,
  },
  {
    id: '6',
    name: 'MINIMALIST LINE WORK',
    slug: 'minimalist-line-work',
    price: 42.0,
    images: [
      {
        id: '6',
        url: 'https://i.ibb.co/LXCPjBrm/dj-old-english.png',
      },
    ],
    categories: [{ id: '1', name: 'Prints', slug: 'prints' }],
    soldOut: false,
  },
]

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
