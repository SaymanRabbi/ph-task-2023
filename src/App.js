import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  return (
    <>
    <Toaster />
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>} />
    </Routes>
    {/* <Footer/> */}
  </>
  );
}

export default App;
