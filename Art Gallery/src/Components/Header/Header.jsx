import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
          <nav className="navbar  col-md-12">
            <h2 className="navbar-brand">SAYFART</h2>

            <div className="col-md-10" id="unorderlist">
              <ul className="container">
                <li className="items"><Link to='/'>Home</Link></li>
                <li className="items"><Link to='/about'>About the artist</Link></li>
                <li className="items"><Link to='/analogart'>Analog art</Link></li>
                <li className="items"><Link to='/digitalart'>Digital art</Link></li>
                <li className="items"><Link to='/fashionart'>Fashion art</Link></li>
                <li className="items"><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>
          </nav>
      </div>
    </div>
  );
}

export default Header;
