
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Service from "./components/Service";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
const App = ()=> {
  
  return <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Register/>}></Route>
    <Route path="/login" element={<Login/>}></Route>

    <Route element={<PrivateRoute/>}>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/service" element={<Service/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>


  </>
}
export default App;
