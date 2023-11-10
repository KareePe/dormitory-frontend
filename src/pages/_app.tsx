import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <NextUIProvider>
      <Component {...pageProps}/>
    </NextUIProvider>
  )
}

export default App