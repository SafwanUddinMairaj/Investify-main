import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./resources/Homepage/Homepage";
import Userrole from "./resources/Userrole/Userrole";
import Userlogin from "./resources/Userlogin/Userlogin";
import Userregistration from "./resources/Userregistration/Userregistration";
import Adminlogin from "./resources/Adminlogin/Adminlogin";
import Investordashboard from "./resources/Investordashboard/Investorhome";
import Investeedashboard from "./resources/Investeedashboard/Investeedashboard";
import Admindashboard from "./resources/Admindashboard/Admindashboard";
import ForgotPassword from "./resources/Forgotpassword/Forgotpassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/admin-login" element={<Adminlogin />} />
          <Route path="/admin/admin-dashboard" element={<Admindashboard />} />
          <Route path="/user-login" element={<Userlogin />} />
          
          <Route path="/user-registration/user-role" element={<Userrole />} />
          <Route path="/user-registration" element={<Userregistration />} />
          <Route
            path="/user/investor-dashboard"
            element={<Investordashboard />}
          />
          <Route
            path="/user/investee-dashboard"
            element={<Investeedashboard />}
          />
          <Route path="/user/admin-dashboard" element={<Admindashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
