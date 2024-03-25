import React from "react";
import { Routes, Route } from "react-router-dom";


import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgetPass from "./pages/Auth/ForgetPass";
function App() {
  return (
   
    <Routes>
     
      
      {/* auth routes */}
      <Route path="/auth/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/auth/forget-password" element={<ForgetPass />} />
      
      </Routes>
  );
}

export default App;