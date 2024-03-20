import { Routes , Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';

function App() {

  return (
   <Routes>
   <Route path = "/" element={<Home />}> </Route>
   <Route path = "/about" element={<Aboutus />}> </Route>
   <Route path = "/*" element={<Home />}> </Route>
    </Routes>
  );
}

export default App;
