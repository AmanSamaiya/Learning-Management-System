import { Routes , Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';

function App() {

  return (
   <Routes>
   <Route path = "/" element={<Home />}> </Route>
   <Route path = "/about" element={<Aboutus />}> </Route>
   <Route path = "/*" element={ <NotFound />}> </Route>
   <Route path = "/signup" element={ <Signup />}> </Route>
    </Routes>
  );
}

export default App;
