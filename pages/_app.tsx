import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import {store} from '../src/store/store';
import 'antd/dist/antd.css'
import '../styles/globals.scss'

function MyApp({
                   Component, pageProps,
               }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
