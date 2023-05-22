import 'tailwindcss/tailwind.css'
import '../src/css/globals.css'

import { AppProps } from 'next/app'
import { Navbar } from 'src/components'
import { MuiThemeProvider } from 'src/providers/muiThemeProvider'
import { Providers } from 'src/state/provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider>
      <Providers>
        <Navbar />
        <Component {...pageProps} />
      </Providers>
    </MuiThemeProvider>
  )
}
