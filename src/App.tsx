import InputForm from './Components/inputForm';
import Table from './Components/table'
import NotFoundError from './Components/notFoundError';
import {
 
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<InputForm/>}/> 
      <Route path="/data/:id" element={<Table/>}/> 
      <Route path="*" element={<NotFoundError error = "Path Not Found"/>}/>
    </Routes>
    </div>
 
  );
}

export default App;
