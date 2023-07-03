import Mamed from "./Project-Components/Mamed";
import Hangman from "./Project-Components/Hangman";
import More from "./Project-Components/More";
export default function Projects(){


    return(
        <>
        <div className="projects" id="Projects">
        <div className="tagtitle">Projects</div>
        <div className="projects-container">
            <Mamed/>
            <Hangman/>
            <More/>
        </div>
          
        </div>
        </>
    );
}
