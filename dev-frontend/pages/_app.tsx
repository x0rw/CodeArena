import '../src/app/globals.css'; 
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (

    <>
  <Navbar/>
<Component {...pageProps} />

    </>
  );
}

export default MyApp;
