import InputForm from './Components/inputForm';
import Table from './Components/table'
import NotFoundError from './Components/notFoundError';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path="/" element={<InputForm/>}/> 
      <Route path="/data/:id" element={<Table/>}/> 
      <Route path="*" element={<NotFoundError error = "No Path Found"/>}/>
    </Routes>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
