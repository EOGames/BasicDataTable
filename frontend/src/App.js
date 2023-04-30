import Register from './pages/Register.jsx';
import Header from './components/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import Database from './pages/Database.jsx';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {/* <Route path='/' element ={<DataTable/>}> </Route> */}
        <Route path='/' element ={<Database/>}> </Route>
        <Route path='/register' element ={<Register/>} > </Route>

        
      </Routes>
      
    </div>
  );
}

export default App;
