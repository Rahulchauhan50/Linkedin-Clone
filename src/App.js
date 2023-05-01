import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route eexat path='/' element={<Login/>} ></Route>
          <Route eexat path='/home' element={[<Header/>,<Home/>]} ></Route>
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;
