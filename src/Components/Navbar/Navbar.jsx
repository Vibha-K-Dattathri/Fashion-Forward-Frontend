import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/headerLogo.png'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>Fashion Forward</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("home")}}><Link style={{ textDecoration: 'none', color: '#F3EDC8'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("style-your-outfit")}}><Link style={{ textDecoration: 'none', color: '#F3EDC8'}} to='/style-your-outfit'>Style your outfit</Link>{menu==="style-your-outfit"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("admin")}}><Link style={{ textDecoration: 'none', color: '#F3EDC8'}} to='/admin'>Admin</Link>{menu==="admin"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login">
            <Link to='/login-signup'><button>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Navbar
