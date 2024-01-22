import { currencyFormat } from '../../helpers/currencyformat'
import { SnackData } from '../../interfaces/SnackData'
import { SkeletonSnack } from './SkeletonSnack'
import { Container } from './styles'
import {FiPlus} from 'react-icons/fi'

interface SnacksProps {
  snacks: SnackData[ ]
}

export function Snacks({ snacks }: SnacksProps) {
  return (
    <Container>
      { !snacks.length ?
        [1,23,4].map( (n) => <SkeletonSnack key={n} />)
        :

        snacks.map((snack) => (
        <div key={snack.id} className='snack'>
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <p>{snack.description}</p>
          <div>
            <strong>{currencyFormat(snack.price)}</strong>
            <button type='button'><FiPlus/></button>
          </div>
        </div>
      ))}
    </Container>
  )
}
