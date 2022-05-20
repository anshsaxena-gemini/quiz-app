import logo from './logo.svg';
import './App.css';

import Registration from './Components/Registration';
import Login from './Components/Login';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
              <Route path='/' element={<Registration/>}></Route>
              
     <Route path='/Login' element={<Login/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
