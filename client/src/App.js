import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Contentarea from "./components/contentarea";
import Footers from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { Layout } from "antd";
import UserLogin from "./components/userLogin";
import UserRegister from "./components/userRegister";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
