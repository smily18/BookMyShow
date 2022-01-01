import {Route } from "react-router-dom";
import axios from "axois";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import Homepage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
    <Route>
      <DefaultHOC path="/" exact component={Homepage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
    </Route>
    </>
  );
}

export default App;
