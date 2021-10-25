import { useEffect, useState } from 'react';
import './App.css';
import IsNotLoggedIn from './Components/LoginSystem/LoginConstructor';
import LoginFunctions from './Components/LoginSystem/LoginFunctions';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let [count, setCount] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setCount(count+1);
    },1000)
  })
  return (
    <div className="App">
      <p>{new Date().toLocaleTimeString()}</p>
      {LoginFunctions.isLogged() ?
      <IsNotLoggedIn /> : <Header/>
      }
    </div>
  );
}

export default App;