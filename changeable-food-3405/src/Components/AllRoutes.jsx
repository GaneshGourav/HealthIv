import { Route, Routes } from "react-router-dom";
import { Treatement } from "../Pages/Treatment";
import { Blogs } from "../Pages/Blog";
import { Contact } from "../Pages/contact";
import { Aboutus } from "../Pages/Aboutus";
import { Home } from "../Pages/Home";

const AllRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/treatment" element={<Treatement />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export { AllRoutes };