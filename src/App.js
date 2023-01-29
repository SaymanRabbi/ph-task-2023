import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  return (
    <>
    <Header/>
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
