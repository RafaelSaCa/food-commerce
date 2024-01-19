import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks';

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description: 'Tamanho Família ',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg ',
    },

    {
      id: 2,
      snack: 'burger',
      name: 'Extra Bacon',
      description: 'Muito Bacon!!',
      price: 25.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
    {
      id: 3,
      snack: 'burger',
      name: 'Salada',
      description: 'Alface Tomate e Queijo',
      price: 20.0,
      image: 'https://i.imgur.com/0umadnY.jpeg',
    }
  ]

  return(
  <>
    <Head title='Hambúrgueres' />
   <SnackTitle>Hambúrgueres</SnackTitle>
   <Snacks snacks={data}></Snacks>
  </>
  )
}
