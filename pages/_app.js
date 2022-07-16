import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { CartProvider } from '../context/GlobalProvider'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <>
  <CartProvider>
  <Component {...pageProps} />
  </CartProvider>
  </>

}

export default MyApp
