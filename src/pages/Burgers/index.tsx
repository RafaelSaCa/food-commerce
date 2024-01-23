import { useContext } from 'react'

import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks'
import { SnackContext } from '../../contexts/SnackContext'

export default function Burgers() {
   const {burgers } = useContext(SnackContext)

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
