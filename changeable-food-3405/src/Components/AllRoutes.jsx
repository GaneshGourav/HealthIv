import { Route, Routes } from "react-router-dom";
import { Treatement } from "../Pages/Treatment";
import { Blogs } from "../Pages/Blog";
import { Contact } from "../Pages/contact";
import { Aboutus } from "../Pages/Aboutus";
import { Home } from "../Pages/Home";
import { SingleProducts } from "../Pages/singleproducts";
import { Cart } from "../Pages/cart";
import { Signin } from "../Pages/login";
import { Signup } from "../Pages/signup";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { PageNotFound } from "../Pages/PageNotFound";
import { Payment } from "../Pages/PaymentPage";
import { PrivatePages } from "../Pages/Privatepage";

const AllRoutes = () => {
  const isAuth = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatment" element={<Treatement />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<SingleProducts />} />
        <Route
          path="/cart"
          element={
            <PrivatePages>
              <Cart />
            </PrivatePages>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export { AllRoutes };
