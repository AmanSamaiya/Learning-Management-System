import { Routes , Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Contact from './pages/Contact';

function App() {

  return (
   <Routes>
   <Route path = "/" element={<Home />}> </Route>
   <Route path = "/about" element={<Aboutus />}> </Route>
   <Route path = "/*" element={ <NotFound />}> </Route>
   <Route path = "/signup" element={ <Signup />}> </Route>
   <Route path = "/signin" element={ <Signin />}> </Route>
   <Route path = "/contact" element={ <Contact />}> </Route>
    </Routes>
  );
}

export default App;
