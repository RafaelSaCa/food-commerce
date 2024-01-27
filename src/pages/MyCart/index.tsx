import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import { TableDesktop } from './Table/TableDesktop'
import { Container } from './styles'

export default function MyCart() {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
      <TableDesktop />
    </Container>
  )
}
