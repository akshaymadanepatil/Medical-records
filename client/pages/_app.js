import { FormState } from '../context/FormState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <FormState>
      <Component { ...pageProps } />
    </FormState>
  </>
}

export default MyApp
