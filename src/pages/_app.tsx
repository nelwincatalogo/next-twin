import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from '@/presentation/components/AlertTemplate';

import GlobalStyles from '@/styles/GlobalStyles';
import 'twin.macro';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 2500,
  offset: '20px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps }) {
  return (
    <div tw="font-poppins">
      <AlertProvider template={AlertTemplate} {...options}>
        <GlobalStyles />
        <Component {...pageProps} />
      </AlertProvider>
    </div>
  );
}

export default MyApp;
