import '../../styles/globals.css'
import { AppProps } from "next/app";
import ContextProvider from "../contexts/ContextProvider";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className='h-full dark:bg-main-dark-bg'>
          <ContextProvider>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </ContextProvider>
      </div>
  )
}

export default MyApp
