import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
// to do: remove global import
import '../styles/playerSheet.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider locale={ptBR}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default MyApp;
