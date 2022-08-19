import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Metatags from '../components/Metatags'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Metatags />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
