
import Home from "./pages/home"
// import Login from "./pages/login"

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./pages/sign-up";
const App =()=> {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App