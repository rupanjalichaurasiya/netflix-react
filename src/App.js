
import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Netflix from "./pages/Netflix";
import MoviePage from "./pages/MoviePage";
//import Tvshow from "./pages/Tvshow";
import Player from "./pages/Player";
//import BackgroundImage from "./components/BackgroundImage";
//import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/signup" element={<SignUpPage/>}/>
       <Route exact path="/movies" element={<MoviePage/>}/>
      
      <Route exact path="/player" element={<Player/>}/>
      <Route exact path="/" element={<Netflix/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
