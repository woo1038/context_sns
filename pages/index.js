import { useContext } from "react";
import AppContext from "../store/AppContext";

export default function Home() {
  const value = useContext(AppContext);
  let { homeTitle, homeContent } = value.state.languages;

  return (
    <>
      {/* <Navigation /> */}
      <div className="page">
        <h2>{homeTitle}</h2>
        <p>{homeContent}</p>
      </div>
    </>
  );
}
