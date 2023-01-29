import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import './App.css';
import RequireAuth from "./auth/RequireAuth";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  const {theme} = useSelector(state=>({...state}));
  return (
    <section data-theme={theme ? "lofi" : "night"}>
    <Header/>
    <Toaster />
    <Routes>
      <Route path="/" element={<RequireAuth>
        <Home/>
      </RequireAuth>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>} />
    </Routes>
    <Footer/>
  </section>
  );
}

export default App;
