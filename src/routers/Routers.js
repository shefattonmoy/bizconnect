import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import UserCard from "../pages/UserCard.jsx";
import UserDetails from "../pages/UserDetails.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home"></Navigate>}></Route>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="users" element={<UserCard></UserCard>}></Route>
      <Route path="users/:id" element={<UserDetails></UserDetails>}></Route>
    </Routes>
  );
};

export default Routers;
