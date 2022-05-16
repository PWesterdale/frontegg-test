import { FronteggProvider } from '@frontegg/nextjs';
import '../styles/globals.css';

const contextOptions = {
    baseUrl: 'BASE_URL_HERE'
}

function MyApp({Component, pageProps, router}) {
    return <>
        <FronteggProvider router={router} contextOptions={contextOptions} hostedLoginBox={true} customLoader={true}>
            <Component {...pageProps}/>
        </FronteggProvider>

        <div className='custom-loader'>My Custom loader</div>
    </>
}

export default MyApp
