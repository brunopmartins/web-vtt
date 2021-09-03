import '../styles/globals.css'
import '../styles/UserHomePage.module.css'
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
