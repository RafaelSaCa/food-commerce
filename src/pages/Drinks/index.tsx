import { useEffect, useState } from 'react'
import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks'
import { SnackData } from '../../interfaces/SnackData'
import { getDrinks } from '../../services/api'

export default function Drinks() {
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const drinksRequest = await getDrinks()

      setDrinks(drinksRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
