// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="logo-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="nav-items">
      <li className="link-item">
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
