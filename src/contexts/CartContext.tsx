import { ReactNode, createContext, useState } from 'react'

import { toast } from 'react-toastify'
import { SnackData } from '../interfaces/SnackData'
import { snackEmoji } from '../helpers/snackEmoji'

interface Snack extends SnackData{
  quantity: number
  subtotal: number
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface CartContextProps {
  cart: Snack[ ]
  addSnackIntoCart: ( snack: SnackData) => void
  // removeSnackFromCart: ({id, snack }: RemoveSnackFromCart) => void
  // updateCart: ( {id, snack, newQuantity }: UpdateCartProps) => void

}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({ } as CartContextProps)

export function CartProvider({ children}: CartProviderProps) {
    const [ cart, setCart] = useState<Snack[]>([])

    function addSnackIntoCart ( snack: SnackData): void{
        const snackExistentInCart = cart.find( (item) => item.snack === snack.snack
                                                      && item.id === snack.id)

    if (snackExistentInCart){
      const newCart = cart.map( (item) => {
        if (item.id === snack.id){
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
         }
         return item
      })
      console.log(`newCart atualização`, newCart)
      toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado ao pedido!`)
      setCart(newCart)

      return
    }
    //adicionar
      const newSnack = {...snack, quantity:1, subtotal: snack.price }
      const newCart = [...cart, newSnack]
      toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado ao pedido!`)

      setCart(newCart)
    }
    return(
      <CartContext.Provider value={{ cart, addSnackIntoCart }}>
        {children}
      </CartContext.Provider>
    )
}
