import GlobalStyles from 'styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
