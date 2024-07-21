import { Outlet, Link } from "react-router-dom";
import './Layout.scss'
import line from '../assets/Line1.png'
const Layout = () => {
  return (
    <div className="Layout">
      <nav>
        <h3 className="logo">
          <Link to="/">mymemo</Link>
        </h3>
        <ul> 
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link></Link>
          </li>
        </ul>
      </nav>
      <img src={line}/>
      <Outlet />
    </div>
  )
};

export default Layout;