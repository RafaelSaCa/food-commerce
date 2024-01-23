import { useContext } from 'react'
import { SnackContext } from '../../contexts/SnackContext'
import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks'

export default function IceCreams ( ){
  const {iceCreams } = useContext(SnackContext)

  return(
    <>
      <Head title='Sorvetes' />
     <SnackTitle>Sorvetes</SnackTitle>
     <Snacks snacks={iceCreams}></Snacks>
    </>
    )
  }
