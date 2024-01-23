import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'

import { Normalize } from 'styled-normalize'

import { SnackProvider } from './contexts/SnackContext'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { CartProvider } from './contexts/CartContext'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <CartProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
          </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
