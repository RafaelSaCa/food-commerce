import { currencyFormat } from "../../../helpers/currencyformat"
import { useCart } from "../../../hooks/useCart"
import { Container } from "../style"

export function PayOrder() {
  const { cart, payOrder} = useCart()

  const totalAmount = cart.reduce(( product, item) => (product += item.subtotal), 0)

  return (
    <Container>
      <button type="button" onClick={payOrder}>Pagar</button>
      <span>
        Total <strong>{currencyFormat(totalAmount) }</strong>
      </span>
    </Container>
  )
}
