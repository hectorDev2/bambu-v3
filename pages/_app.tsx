import 'tailwindcss/tailwind.css'
import '../src/css/globals.css'

import { AppProps } from 'next/app'
import { Navbar } from 'src/components'
import { Footer } from 'src/components/Footer'
import { MuiThemeProvider } from 'src/providers/muiThemeProvider'
import { Providers } from 'src/state/provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <MuiThemeProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </MuiThemeProvider>
    </Providers>
  )
}
