import logo from './logo.svg';
// import './App.css';
import QuizForm from './Components/QuizForm';

import Registration from './Components/Registration';
import Login from './Components/Login';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import QuizPage from './Components/QuizForm';
import HomePage from './Components/HomePage';
import ShowQuiz from './Components/ShowQuiz';
import Scorecard from './Components/Scorecrad';
import TakeQuiz from './Components/TakeQuiz';
import ShowCode from './Components/ShowCode';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
              <Route exact path='/' element={<HomePage/>}></Route>
              
     <Route exact path='/Login' element={<Login/>}></Route>
     <Route exact path='/Registration' element={<Registration/>}></Route>
     <Route exact path='/HomePage' element={<HomePage/>}></Route>
     <Route exact path='/QuizForm' element={<QuizForm/>}></Route>
     <Route exact path='/ShowQuiz' element={<ShowQuiz/>}></Route>
     <Route exact path='/Scorecard' element={<Scorecard/>}></Route>
     <Route exact path='/TakeQuiz' element={<TakeQuiz/>}></Route>
     <Route exact path='/ShowCode' element={<ShowCode/>}></Route>


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
