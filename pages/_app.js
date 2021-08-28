import '../styles/globals.css'
import '../styles/home.css'
// to do: remove global import
import '../styles/playerSheet.css'
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