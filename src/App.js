import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import LoginComponents from './components/login';
import LayoutAdmin from './components/layout';
import DashbordComponents from './components/Dashbord';
import  CategoryComponent  from './components/category';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={< LoginComponents/>}/>
          <Route  element={<LayoutAdmin/>}>           
           <Route path='/home' element={< DashbordComponents />}/>
           <Route path='/category' element={< CategoryComponent />}/>
           <Route path='/product' element={< DashbordComponents />}/>
          
           
           
          </Route>
        </Routes>/
      </BrowserRouter>
    </div>
  );
}

export default App;