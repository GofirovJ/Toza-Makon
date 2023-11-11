import Layout from "@/components/layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { appWithTranslation } from "next-i18next";
function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
