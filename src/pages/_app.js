import Layout from '../layout';
import '../globals.less';

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
