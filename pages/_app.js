import '../styles/globals.css'
import '../styles/colmeia.css'
import '../styles/home.css'
import { QueryClient, QueryClientProvider } from 'react-query'

 const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       refetchOnWindowFocus: false,
     },
   },
 })

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}

export default MyApp
