import { useEffect, useState } from "react";
import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';


export default function Home() {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showInfoText, setShowInfoText] = useState(false);
  const [showscrollDown, setShowScrollDown] = useState(false);
  const introText = "Hi, I'm";
  const nameText = "Mark Noe Fetero";
  const infoText =
    "A dedicated and enthusiastic student with a strong passion for web development, aspiring to become a skilled and versatile web developer";

  useEffect(() => {
    let introIndex = 0;
    let introFullText = "";

    const typeWriter = () => {
      if (introIndex < introText.length) {
        introFullText += introText.charAt(introIndex);
        introIndex++;
        const introElement = document.querySelector(".greetings");
        if (introElement) {
          introElement.textContent = introFullText;
        }
        setTimeout(typeWriter, 100);
      } else {
        let nameIndex = 0;
        let nameFullText = "";

        const typeWriterName = () => {
          if (nameIndex < nameText.length) {
            nameFullText += nameText.charAt(nameIndex);
            nameIndex++;
            const nameElement = document.querySelector(".intro-name");
            if (nameElement) {
              nameElement.textContent = nameFullText;
            }
            setTimeout(typeWriterName, 100);
          } else {
            setShowTypewriter(true);
            setShowInfoText(true);
            setTimeout(() => {
              setShowScrollDown(true);
              document.body.style.overflow = "auto"; // Enable scrolling after typewriter effect
            }, 1500);
          }
        };

        setTimeout(typeWriterName, 1000);
      }
    };

    setTimeout(typeWriter, 1000);
    document.body.style.overflow = "hidden"; // Disable scrolling during typewriter effect

    return () => {
      document.body.style.overflow = "auto"; // Reset to default scrolling behavior
    };
    
  }, []);

 

  return (
    <>
      <div className="home">
        <div className="stars"></div>
        <div className="intro">
          <p className={`greetings ${showTypewriter ? "typewriter" : ""}`}></p>
          <p className={`intro-name ${showTypewriter ? "typewriter" : ""}`}></p>
          <div className={`short-info ${showInfoText ? "" : "hide"}`}>
            {infoText}
          </div>
          <div  className={`intro-icons ${showInfoText ? "" : "hide"}`}>
            <a href="https://www.facebook.com/marknoe.fetero/" target="_blank">
               <IconBrandFacebook className="icons" />
            </a>
            <a href="https://github.com/mrknoee?tab=repositories" target="_blank">
            <IconBrandGithub  className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/mark-noe-fetero-44b768254/" target="_blank">
            <IconBrandLinkedin className="icons"/>
            </a>
          </div>
          <div  className={`scrolldown ${showscrollDown ? "" : "hide"}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>
    </>
  );
}
