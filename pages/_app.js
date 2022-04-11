import "../styles/globals.css";
import AppContext from "../store/AppContext";
import languagesObject from "../store/languagesObject";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [languageSelected, setLanguageSelected] = useState("en");
  const languageObject = languagesObject;

  return (
    <AppContext.Provider
      value={{
        state: {
          languages: languageObject[languageSelected],
          languageSelected: languageSelected,
        },
        setLanguageSelected: setLanguageSelected,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
