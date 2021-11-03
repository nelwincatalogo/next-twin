import GlobalStyles from '@/styles/GlobalStyles';
import 'twin.macro';

function MyApp({ Component, pageProps }) {
  return (
    <div tw="font-poppins">
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
