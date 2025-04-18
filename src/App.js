// import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
// import Home from './components/Home';
import Login from './components/Login';
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className="App">
      
     <Body/>
     
      {/* <Home/> */}
      {/* <Login/> */}
      <Toaster/>

    
    </div>
    
  );
}

export default App;
