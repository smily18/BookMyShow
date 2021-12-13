import {Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Components
import Homepage from "./Pages/Home.page";

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Homepage} />
    </>
  );
}

export default App;
