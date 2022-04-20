import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // * Everything inside the Layout can be accessed as 'children'
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
