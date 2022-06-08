import './App.css';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home';
import {useState} from 'react';

function App() {
  const [user, setUser] = useState({})


  function handleLogin(data){
    setUser({...data})
  }

  return (
    <div className="App">
      <Nav />
      {user.userName ? <Home name={user.userName}/> : <Login handleLogin={handleLogin}/>}
    </div>
  );
}

export default App;
