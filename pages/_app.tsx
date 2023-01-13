import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'urql'
import { client } from '../lib/graphql'
import Layout from '../components/Layout'
import { AppProvider } from '../components/AppContext'

export default function App({Component, pageProps}: AppProps) {
  
  return (<>    
      <Provider value={client}>
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </AppProvider>
      </Provider>
    
    </>
  )  
}
