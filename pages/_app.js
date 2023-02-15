import "../styles/globals.css";
import Layout from "../components/Layout";
import BlogProvider from "../context/BlogProvider";

function MyApp({ Component, pageProps }) {
  return (
    <BlogProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BlogProvider>
  );
}

export default MyApp;
