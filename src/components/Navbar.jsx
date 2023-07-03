import { IconSmartHome, IconInfoSquare, IconToolsOff, IconAlignBoxCenterStretch, IconMessage2Bolt} from '@tabler/icons-react';
import { scroller } from 'react-scroll';

export default function Navbar() {

  const handleClick = (componentId) => {
    scroller.scrollTo(componentId, {
      smooth: true,
      offset: -50,
      duration: 400,
    });
  };

  return(
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <a href="#">Noe</a>
        </div>

        <div>
          <ul className="navbar-nav">
          <li className="nav-item"  onClick={() => handleClick("Home")}>
              <a className="nav-link" href="/#" >
                Home
              </a>
              <span>
              <IconSmartHome  color="#fff" className="nav-icons" /> 
              </span>

            </li>
            <li className="nav-item" onClick={() => handleClick("About")}>
              <a className="nav-link" href="/#">
                About
              </a>
              <span>
              <IconInfoSquare color="#fff" className="nav-icons" /> 
              </span>
            </li>
            <li className="nav-item" onClick={() => handleClick("Skills")}>
              <a className="nav-link" href="/#">
                Skills
              </a>
              <span>
              <IconToolsOff color="#fff" className="nav-icons" />
              </span>
            </li>
            <li className="nav-item" onClick={() => handleClick("Projects")}>
              <a className="nav-link" href="/#">
                Projects
              </a>
              <span>
              <IconAlignBoxCenterStretch color="#fff" className="nav-icons" /> 
              </span>
            </li>
            <li className="nav-item" onClick={() => handleClick("Contact")}>
              <a className="nav-link" href="/#">
                Contact
              </a>
              <span>
              <IconMessage2Bolt color="#fff" className="nav-icons" /> 
              </span>
            </li>
          </ul>
          
        </div>

      </nav>
    </>
  );
}
