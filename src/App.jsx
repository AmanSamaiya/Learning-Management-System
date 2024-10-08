import { Routes , Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Contact from './pages/Contact';
import Denied from './pages/denied';
import CourseList from './pages/Course/CourseList';
import CourseDescription from './pages/Course/CourseDescription';
import CreateCourse from './pages/Course/CreateCourse';
import RequireAuth from './components/Auth/RequireAuth';
import Profile from '././pages/User/Profile.jsx';
import EditProfile from './pages/User/EditProfile.jsx';
import Checkout from './pages/Payments/Checkout.jsx';
import CheckoutSuccess from './pages/Payments/CheckoutSuccess.jsx';
import CheckoutFailure from './pages/Payments/CheckoutFailure.jsx';
import DisplayLectures from './pages/Dashboard/DisplayLectures.jsx';
import AddLecture from './pages/Dashboard/AddLecture.jsx';

function App() {

  return (
   <Routes>
   <Route path = "/" element={<Home />}> </Route>
   <Route path = "/about" element={<Aboutus />}> </Route>
   <Route path = "/*" element={ <NotFound />}> </Route>
   <Route path = "/signup" element={ <Signup />}> </Route>
   <Route path = "/signin" element={ <Signin />}> </Route>
   <Route path = "/contact" element={ <Contact />}> </Route>
   <Route path = "/courses" element={ <CourseList />}> </Route>
   <Route path = "/course/description" element={ <CourseDescription />}> </Route>

   <Route element={<RequireAuth allowedRoles={["ADMIN" , "USER"]} />}>
      <Route path="/user/profile" element={<Profile />}/>
      <Route path="/user/editprofile" element={<EditProfile />}/>

      
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/checkout/success" element={<CheckoutSuccess />}/>
      <Route path="/checkout/fail" element={<CheckoutFailure />}/>

      <Route path="/course/displaylectures" element={<DisplayLectures />}/>
      <Route path="/course/addlecture" element={<AddLecture />}/>
    </Route>


    <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
      <Route path="/course/create" element={<CreateCourse />}/>
    </Route>

   <Route path = "/denied" element={ <Denied />}> </Route>
    </Routes>
  );
}

export default App;
