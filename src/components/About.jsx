import { IconUser, IconPhone, IconMail } from '@tabler/icons-react';
import pdf from '../assets/resume.pdf';

export default function About() {

    function ResumeCick(){
        window.open(pdf);
    }

    return(
        <>
        <div className="about" id="About">
        <div className="tagtitle">About me</div>

        <div className="about-info">
            <div className="blur">
            </div>
            <p className="introduction">
                I am an incoming fourth-year student pursuing a Bachelor of Science degree in 
                Computer Science at Pamantasan ng Lungsod ng Maynila. Throughout my studies, I have acquired a solid 
                foundation in programming languages and computer science principles. Exploring web development 
                technologies and frameworks further, I am eager to gain hands-on experience and enhance my skills.
                Continuous learning and staying updated with industry trends are my commitments as I aim to contribute
                to the field of technology as well as the success of an organization.
            </p>
            <div className="about-details">
                <div className="my-details">
                    <label>
                    <IconUser  color="#fff" className="about-icons" /> 
                    Mark Noe Fetero
                    </label>
                    <label>
                    <IconPhone  color="#fff" className="about-icons" /> 
                    09602241444
                    </label>
                    <label>
                    <IconMail  color="#fff" className="about-icons" /> 
                    marknoefetero@gmail.com
                    </label>
                </div>
                 <div className="resume-details"> 
                    <button  className="resume-button" onClick={ResumeCick}> Resume</button> 
                </div> 
            </div>
        </div>
        </div>
        </>
    );
}