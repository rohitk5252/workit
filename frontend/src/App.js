import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages and components
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
        <Route 
          path='/'
          element={ <Home /> }
          />
        <Route 
          path='/about'
          element={ <About /> }
          /> 
        <Route 
          path='/signup'
          element={ <Signup/> }
          />
        <Route 
          path='/login'
          element={ <Login/> }
          />
        </Routes>
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
