import {  IconBrandGithub} from '@tabler/icons-react';

export default function Mamed(){
   

    return(
        <>
        <div className="project-1">
            <div className="blur">
            </div>
        <div className="carousel-wrapper">
            <span id="item-1" />
            <span id="item-2" />
            <span id="item-3" />
            <div className="carousel-item item-1" >
            <a href="#item-3" className="arrow-prev arrow" />
            <a href="#item-2" className="arrow-next arrow" />
            </div>
            <div className="carousel-item item-2" >
            <a href="#item-1" className="arrow-prev arrow" />
            <a href="#item-3" className="arrow-next arrow" />
            </div>
            <div className="carousel-item item-3" >
            <a href="#item-2" className="arrow-prev arrow" />
            <a href="#item-1" className="arrow-next arrow" />
            </div>
        </div>
        <div className="project-details">
            <div className="project-title">
                Appointment System
                <a
              href="https://github.com/AlphaDureku/ManilaMed-Online-Hospital-Appointment-System--Client"
              target="_blank"
            >
              <IconBrandGithub  className="git-icon" />
            </a>
            </div>
            <div className="project-info">
            A Software engineering web-based system for scheduling doctor appointments in 
            which I led the front end development.
            </div>
            <div className="git-links">
            <a href="https://manilamed.netlify.app/" target="_blank"  className = "project-link" style={{color:"#fff"}}>manilamed.netlify.app</a>
            </div>
        </div>

        </div>
        </>
    );
}
