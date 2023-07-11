import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Home from './pages/home';
import { Routes,Route } from 'react-router-dom';
import Register from './pages/Signup';
import TemporaryDrawer from './pages/Drawer';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/drawer" element={<TemporaryDrawer/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
