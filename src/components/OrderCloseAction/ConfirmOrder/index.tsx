import { currencyFormat } from "../../../helpers/currencyformat"
import { useCart } from "../../../hooks/useCart"
import { Container } from "../style"

export function ConfirmOrder() {
  const { cart, confirmOrder} = useCart()

  const totalAmount = cart.reduce(( product, item) => (product += item.subtotal), 0)

  return (
    <Container>
      <button type="button" onClick={confirmOrder}>Finalizar Pedido</button>
      <span>
        Total <strong>{currencyFormat(totalAmount) }</strong>
      </span>
    </Container>
  )
}
