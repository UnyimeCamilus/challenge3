
import Home from "./pages/home"
import Login from "./pages/login"
import Selectplan from './pages/selectplan'

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./pages/sign-up";
const App =()=> {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Selectplan" element={<Selectplan />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App