import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useAuth } from '../../contetxt/auth';
import SearchInput from '../Forms/SearchInput';
import useCategory from '../../hook/useCategory';
import { useCart } from '../../contetxt/Cart';
import {Badge} from "antd";

const Header = () => {
  const [cart] = useCart();
  const {auth,setAuth}= useAuth();
  const categories = useCategory();
  const handlelogout = ()=>{
    setAuth({
      ...auth,
      user:null,token:""
    })
    localStorage.removeItem('auth')
  }
  return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to = "/" className="navbar-brand" >🛍️E Commerce</Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <SearchInput/>
            <li className="nav-item">
            <NavLink to="/" className="nav-link " aria-current="page" href="#">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

            {
               !auth.user ?(<>
                <li className="nav-item">
            <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
            </li>
              </>): (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>

                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to={`/dashboard/${auth?.user?.role===1 ? "admin" : "user" } `} className="dropdown-item">
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handlelogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )
            }
            <li className="nav-item">
            <NavLink to="/categoty" className="nav-link" href="#">Category</NavLink>
            </li>
            <li className="nav-item">
            <Badge count = {cart?.length}>
            <NavLink to="/cart" className="nav-link" href="#">Cart</NavLink>
            </Badge>
            
            </li>
            
          </ul>
         
        </div>
      </div>
    </nav>
  )
}

export default Header