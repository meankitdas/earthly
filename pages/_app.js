import "@/styles/globals.css";
import NavBar from "../components/navBar/navBar";
import Layout from "../components/navBar/layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../components/LoadingPage/Loader";

const Loading = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) =>
      url !== router.asPath ? setLoading(true) : null;
    const handleComplete = (url) =>
      url === router.asPath ? setLoading(false) : null;

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loading && <Loader />;
};

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Loading /> */}
      <Component {...pageProps} />
    </Layout>
  );
}
