import "../styles/globals.css";
import StoryContextProvider from "../context/StoryContext";

function MyApp({ Component, pageProps }) {
  return (
    <StoryContextProvider>
      <Component {...pageProps} />
    </StoryContextProvider>
  );
}

export default MyApp;
