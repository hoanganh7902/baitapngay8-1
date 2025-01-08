import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

function App() {
  return (
    <div className="App">
      <EmployeeList/>
      <Routes>
        <Route path='/form/:id' element={<EmployeeForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
