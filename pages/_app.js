import '@/styles/globals.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { FormProvider } from "../context/form";
import { ImageProvider } from "../context/image";
import { LoadingProvider } from "../context/loading";
import ErrorBoundary from '../components/ErrorBoundary'

export default function App({ Component, pageProps }) {
  return (
    <LoadingProvider> 
      <ImageProvider>
          <FormProvider>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </FormProvider>
      </ImageProvider>
    </LoadingProvider>
  )
}
