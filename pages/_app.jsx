import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

import { es } from "date-fns/locale";
import setDefaultOptions from "date-fns/setDefaultOptions";
import "../styles/globals.css";
setDefaultOptions({ locale: es });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 1000 * 60 * 2,
    },
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>HiBeauty | Dashboard</title>
      </Head>
      <Toaster toastOptions={{ duration: 5000 }} containerClassName="text-sm" />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
