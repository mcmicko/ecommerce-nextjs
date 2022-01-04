import { useEffect } from "react";
import "../styles/globals.css";
import { StoreProvider } from "../utils/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // css server rebdering
    const jssStyles = document.querySelector("#jss-serveer-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProvider>
      <Component {...pageProps} />;
    </StoreProvider>
  );
}

export default MyApp;
