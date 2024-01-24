import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Normalize } from 'styled-normalize'
import { AppRoutes } from './routes'

import { CartProvider } from './contexts/CartContext'
import { SnackProvider } from './contexts/SnackContext'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <CartProvider>
            <AppRoutes />
            <ToastContainer autoClose={2000} />
            <GlobalStyle />
            <Normalize />
          </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
