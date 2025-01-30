import "./Header.css";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <header className="col-xs-12 col-md-12">
          <nav className="navbar  col-md-12">
            <h2 className="navbar-brand">SAYFART</h2>

            <div className="col-md-10" id="unorderlist">
              <ul className="nav-container">
                <li className="nav-item active">Home</li>
                <li className="nav-item">About the artist</li>
                <li className="nav-item">Analog art</li>
                <li className="nav-item">Digital art</li>
                <li className="nav-item">Fashion art</li>
                <li className="nav-item">Contact</li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
