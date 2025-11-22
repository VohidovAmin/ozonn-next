import { CartItem } from "./cart-item.model"
import { Product } from "./product.model"

export interface CartContexttype {
    isOpen: boolean
    cartItems: CartItem[]
    setIsOpen: (value: boolean) => void
    addToCart: (product: Product) => void
    deleteCartItem: (product: Product) => void
}