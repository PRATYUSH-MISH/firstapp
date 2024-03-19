import React,{ useState } from 'react'
import Modal from '../Modal.js'
import Cart from '../Screens/Cart';
import { Link,useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import {useCart}from './ContextReducer.js'
export default function Navbar() {
  const [cartView, setCartview] = useState(false)
  let data=useCart();
  const navigate=useNavigate();
  const handleLogout=()=>{
localStorage.removeItem("authToken");
navigate("/login")
  }
  return (
    <div>
      <nav className=" navbar navbar-expand-lg navbar-dark bg-warning">
        <Link className="navbar-brand fs-1 fst-italic" href="/">FOODIE</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item ">
              <Link className="nav-link active fs-5" aria-current="page" to="/"> Home </Link>
            </li>
            {(localStorage.getItem("authToken")) ?
              <li className="nav-item ">
                <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
              </li>
              : " "
            }


          </ul>
          {(!localStorage.getItem("authToken")) ?
            <div className='d-flex'>
              <Link className="btn bg-white text-success mx-1" to="/login">LOGIN</Link>

              <Link className="btn bg-white text-success mx-1" to="/createuser">Sign-UP</Link>

            </div>
            :
            <div>
              <div className='btn bg-white text-success mx-2'onClick={()=>{setCartview(true)}}>
                My Cart{"  "}
                <Badge pill bg='danger'>{data.length}</Badge>

              </div>
                {cartView?<Modal onClose={()=>setCartview(false)}><Cart/></Modal>:null}

              <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                LogOut

              </div>
            </div>
          }
        </div>
      </nav>

    </div>
  )
}
