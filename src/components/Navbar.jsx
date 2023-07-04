import { IconSmartHome, IconInfoSquare, IconToolsOff, IconAlignBoxCenterStretch, IconMessage2Bolt} from '@tabler/icons-react';
import { scroller } from 'react-scroll';

export default function Navbar(props) {


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
          <li className="nav-item" onClick={props.navbarEnabled ? () => handleClick("Home"): null}>
              <a className="nav-link" href="/#" >
                Home
              </a>
              <span>
              <IconSmartHome  color="#fff" className="nav-icons" /> 
              </span>

            </li>
            <li className="nav-item"  onClick={props.navbarEnabled ? () => handleClick("About"): null}>
              <a className="nav-link" href="/#">
                About
              </a>
              <span>
              <IconInfoSquare color="#fff" className="nav-icons" /> 
              </span>
            </li>
            <li className="nav-item"  onClick={props.navbarEnabled ? () => handleClick("Skills"): null}>
              <a className="nav-link" href="/#">
                Skills
              </a>
              <span>
              <IconToolsOff color="#fff" className="nav-icons" />
              </span>
            </li>
            <li className="nav-item"  onClick={props.navbarEnabled ? () => handleClick("Projects"): null}>
              <a className="nav-link" href="/#">
                Projects
              </a>
              <span>
              <IconAlignBoxCenterStretch color="#fff" className="nav-icons" /> 
              </span>
            </li>
            <li className="nav-item"  onClick={props.navbarEnabled ? () => handleClick("Contact"): null}>
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
