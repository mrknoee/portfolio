import htmlLogo from "../assets/html-logo.png"
import cssLogo from "../assets/css-logo.png"
import jsLogo from "../assets/js-logo.png"
import reactLogo from "../assets/react-logo.png"
import gitLogo from "../assets/git-logo1.png"
import postmanLogo from "../assets/postman-logo.png"
import sqlLogo from "../assets/sql-logo.png"



export default function Skills(){

    return(
        <>
        <div className="skills" id="Skills">

        <div className="tagtitle">Skills</div>
        <div className="dev-skills">
            <div className="html-container">
                <img src={htmlLogo} alt="img-not-found" className="skills-logo"/>
                <p className="skills-label">HTML</p> 
            </div>
            <div className="css-container">
                <img src={cssLogo} alt="img-not-found" className="skills-logo"/>
                <p className="skills-label">CSS</p> 
            </div>
            <div className="js-container">
                <img src={jsLogo} alt="img-not-found" className="skills-logo"/>
                <p className="skills-label">Javascript</p> 
            </div>
            <div className="react-container">
                <img src={reactLogo} alt="img-not-found" className="skills-logo"/>
                <p className="skills-label">React</p> 
            </div>
            </div>
        <div className="moredev-skills">
            <div className="sql-container">
                <img src={sqlLogo} alt="img-not-found" className="skills-logo"/>
                <p className="moreskills-label">SQL</p> 
            </div>
            <div className="git-container">
                <img src={gitLogo} alt="img-not-found" className="skills-logo"/>
                <p className="moreskills-label">Git</p> 
            </div>
            <div className="postman-container">
                <img src={postmanLogo} alt="img-not-found" className="skills-logo"/>
                <p className="moreskills-label">Postman</p> 
            </div>
        </div>
       
        </div>


        </>
    );
}