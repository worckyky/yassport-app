import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import {store} from '../src/store/store';
import 'antd/dist/antd.css'
import '../styles/globals.scss'
import * as gtag from '../libs/gtag'
import {useRouter} from "next/router";
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url: any) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
