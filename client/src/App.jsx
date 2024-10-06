import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import Error from "./pages/Error";
import Footer from "./Footer/Footer";
import { Logout } from "./pages/Logout";
import AdminLayout from "./layouts/Admin-Layout";
import AdminUsers from "./pages/Admin-users";
import AdminContacts from "./pages/Admin-Contacts";
import AdminUpdate from "./pages/Admin-update";
import AdminServices from "./pages/Admin-Services";
import AdminEditService from "./pages/AdminEditService";
import AdminAddService from "./pages/AdminAddService";
import UserProfile from "./pages/UserProfile";
import UserEditProfile from "./pages/UserEditProfile";
import ServiceRequest from "./pages/ServiceRequest";
import InternPreview from "./pages/InternPreview";
import InternApply from "./pages/InternApply";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import SubWebsitePage from "./pages/SubWebsitePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/user/:id/profile" element={<UserProfile />} />
        <Route path="user/update/:id/profile" element={<UserEditProfile />} />

        <Route path="/service-request" element={<ServiceRequest />} />

        <Route path="/internship/preview/:id" element={<InternPreview />} />
        <Route path="/internship/apply/:id" element={<InternApply/>} />
        {/* <Route path="/service/sub" element={<SubWebsitePage/>}/> */}

        <Route path="*" element={<Error />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="user" element={<AdminUsers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="user/:id/edit" element={<AdminUpdate />} />

          <Route path="service" element={<AdminServices />} />
          <Route path="service/:id/edit" element={<AdminEditService />} />
          <Route path="service/add" element={<AdminAddService />} />
        </Route>
      </Routes>

      <Footer />
      <div className="copyright">
        <p>© 2024 Copyright: PRADEX</p>
      </div>
    </Router>
  );
};

export default App;
