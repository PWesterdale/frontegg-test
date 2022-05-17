import { FronteggProvider } from '@frontegg/nextjs';
import '../styles/globals.css';

const contextOptions = {
    baseUrl: '[REDACTED]',
    clientId: '[REDACTED]'
}

function MyApp({Component, pageProps, router}) {
    return <>
        <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true} customLoader={true}>
            <Component {...pageProps}/>
        </FronteggProvider>
        <div className='custom-loader'>My Custom loader</div>
    </>
}

export default MyApp
