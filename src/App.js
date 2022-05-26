import logo from './logo.svg';
// import './App.css';
import QuizForm from './Components/QuizForm';

import Registration from './Components/Registration';
import Login from './Components/Login';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import QuizPage from './Components/QuizForm';
import HomePage from './Components/HomePage';
import Question from './Components/Question';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
              <Route exact path='/' element={<Registration/>}></Route>
              
     <Route exact path='/Login' element={<Login/>}></Route>
    
     <Route exact path='/HomePage' element={<HomePage/>}></Route>
     <Route exact path='/QuizForm' element={<QuizForm/>}></Route>
     <Route exact path='/Question' element={<Question/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
