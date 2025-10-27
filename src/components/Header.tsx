import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useAtom } from 'jotai'
import { cartCountAtom, cartTotalAtom } from '../store/cart'

const navItems = [
  { label: 'SALE', href: '/sale' },
  { label: 'PRINTS', href: '/prints' },
  { label: 'ORIGINALS', href: '/originals' },
  { label: 'COMMISSIONS', href: '/commissions' },
  { label: 'ACCESSORIES', href: '/accessories' },
]

function Header() {
  const [cartCount] = useAtom(cartCountAtom)
  const [cartTotal] = useAtom(cartTotalAtom)

  const handleCartClick = () => {
    if (window.Snipcart) window.Snipcart.api.theme.cart.open()
  }

  return (
    <header className="w-full py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-center">
          <Link to="/">
            <h1 className="text-lg md:text-2xl font-bold hover:tracking-tight tracking-widest transition-all w-fit mx-auto">
              HERE DRAWING THINGS
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="text-center mb-4 hidden">
          <ul className="flex justify-center items-center gap-2 flex-wrap text-xs tracking-widest">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="after:content-['•'] after:relative last:after:content-[''] after:ml-2"
              >
                <Link to={item.href} className="hover:opacity-60 transition-opacity">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cart Summary */}
        <div className="text-center mt-2">
          <button
            className="text-xs text-gray-600 hover:text-black transition-colors inline-flex items-center gap-2 cursor-pointer"
            onClick={handleCartClick}
          >
            <ShoppingCart size={14} />
            <span>
              {cartCount} items (${cartTotal.toFixed(2)})
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
