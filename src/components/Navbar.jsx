
export default function Navbar() {

  return(
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <a href="#">Noe</a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
