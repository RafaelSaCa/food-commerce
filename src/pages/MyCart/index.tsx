import { Container } from './styles'
import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'

export default function MyCart() {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader></OrderHeader>
    </Container>
  )
}
