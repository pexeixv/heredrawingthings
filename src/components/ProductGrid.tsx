import { CircleSlashIcon } from 'lucide-react'
import type { Product } from '../types'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-x-6 gap-y-12">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center col-span-full py-20">
            <CircleSlashIcon className="size-12 text-neutral-300" />
            <p className="mt-4 text-neutral-600 text-center">
              No products found. Please check back later.
            </p>
          </div>
        ) : (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </div>
    </section>
  )
}
