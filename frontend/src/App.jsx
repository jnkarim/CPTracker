import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Blogs from "./pages/Blogs.jsx";

import AboutCPTracker from "./pages/AboutCPTracker.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Contest from "./pages/Contest.jsx"; // Adjust path as per your project structure
import Feedback from "./pages/Feedback.jsx";
import Homepage from "./pages/Homepage.jsx";
import JoinDiscord from "./pages/JoinDiscord.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Signup from "./pages/Signup.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/aboutcptracker" element={<AboutCPTracker />} />
          <Route path="/joindiscord" element={<JoinDiscord />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
