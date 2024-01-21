
// // import {Routes,Route} from "react-router-dom";
// // import HomePage from "./pages/HomePage";
// // import About from "./pages/About";
// // import Policy from "./pages/Policy";
// // import Pagenotfound from "./pages/Pagenotfound";
// // import Contact from "./pages/Contact";
// // import Register from "./pages/Auth/Register";
// // import Login from "./pages/Auth/Login";
// // import Dashboard from "./pages/user/Dashboard";
// // import PrivateRoute from "./Components/Routes/Private";
// // import ForgotPasssword from "./pages/Auth/Forgotpassword";
// // import AdminRoute from "./Components/Routes/Admin";
// // import Admindashboard from "./pages/admin/Admindashboard";

// // function App() {
// //   return (
// //     <>
// //     <Routes>
// //       <Route path = "/home" element={<HomePage/>}></Route>
// //       <Route path = "/about" element={<About/>}></Route>
// //       <Route path = "/contact" element={<Contact/>}></Route>
// //       <Route path = "/forgotpassword" element={<ForgotPasssword/>}></Route>
// //       <Route path = "/dashboard" element={<PrivateRoute/>}>
// //         <Route path="user" element={<Dashboard/>}></Route>
// //       </Route>
// //       <Route path = "/dashboard" element={<AdminRoute/>}>
// //         <Route path="admin" element={<Admindashboard/>}></Route>
// //       </Route>
// //       <Route path = "/policy" element={<Policy/>}></Route>
// //       <Route path = "/register" element={<Register/>}></Route>
// //       <Route path = "/Login" element={<Login/>}></Route>
// //       <Route path = "*" element={<Pagenotfound/>}></Route>
// //     </Routes>
    
      
// //     </>
// //   );
// // }

// // export default App;
// import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Policy from "./pages/Policy";
// import Pagenotfound from "./pages/Pagenotfound";
// import Register from "./pages/Auth/Register";
// import Login from "./pages/Auth/Login";
// import Dashboard from "./pages/user/Dashboard";
//  import PrivateRoute from "./Components/Routes/Private";
//  import ForgotPasssword from "./pages/Auth/Forgotpassword";
// import AdminRoute from "./Components/Routes/Admin";
// import AdminDashboard from "./pages/admin/Admindashboard";
// import CreateCategory from "./pages/admin/CreateCategory";
// import CreateProduct from "./pages/admin/CreateProduct";
// //import CreateP
// //import Users
// //import Orders from "./pages/user/Orders";
// //import Profile from "./pages/user/Profile";
// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/dashboard" element={<PrivateRoute />}>
//           <Route path="user" element={<Dashboard />} />
//           {/* //<Route path="user/orders" element={<Orders />} />
//           //<Route path="user/profile" element={<Profile />} /> */}
//         </Route>
//         <Route path="/dashboard" element={<AdminRoute />}>
//           <Route path="admin" element={<AdminDashboard />} />
//           <Route path="admin/create-category" element={<CreateCategory />} />
//            <Route path="admin/create-product" element={<CreateProduct />} />
//           {/* <Route path="admin/users" element={<Users />} />  */}
//         </Route>
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPasssword />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/policy" element={<Policy />} />
//         <Route path="*" element={<Pagenotfound />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./Components/Routes/Private";
import ForgotPassword from "./pages/Auth/Forgotpassword"; // Corrected component name
import AdminRoute from "./Components/Routes/Admin";
import AdminDashboard from "./pages/admin/Admindashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import Users from "./pages/admin/User";
import Orders from "./pages/user/Order";
import Profile from "./pages/user/Profile";
import Products from "./pages/admin/Product";
import UpdateProduct from "./pages/admin/UpdateProduct";
import { Search } from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPages";


function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/categories" element={<Categories/>} />
    <Route path="/category/:slug" element={<CategoryProduct />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/search" element = {<Search/>} />
    <Route path="/product/:slug" element = {<ProductDetails/>} />
    <Route path="/dashboard" element={<PrivateRoute />}>
      <Route path="user" element={<Dashboard />} />
      <Route path="user/orders" element={<Orders />} />
      <Route path="user/profile" element={<Profile />} />
    </Route>
      <Route path="/dashboard/admin/*" element={<AdminRoute />}>
        <Route index element={<AdminDashboard />} />
        <Route path="create-category" element={<CreateCategory />} />
        <Route path="create-product" element={<CreateProduct />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:slug" element={<UpdateProduct />} />
        <Route path ="users" element={<Users/>}/>
        {/* Add more nested routes for admin dashboard if needed */}
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default App;
