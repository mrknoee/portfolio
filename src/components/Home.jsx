import { useEffect, useState } from "react";
import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';


export default function Home(props) {

  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showInfoText, setShowInfoText] = useState(false);
  const [showscrollDown, setShowScrollDown] = useState(false);
  const introText = "Hi, I'm";
  const nameText = "Mark Noe Fetero";
  const infoText =
    "A dedicated and enthusiastic student with a strong passion for web development, aspiring to become an expert and versatile web developer.";

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
              document.body.style.overflow = "auto";
              props.setNavbarEnabled(true);
            }, 1500);
          }
        };

        setTimeout(typeWriterName, 1000);
      }
    };

    setTimeout(typeWriter, 1000);
    document.body.style.overflow = "hidden"; 

    return () => {
      document.body.style.overflow = "auto";
    };
    
  }, []);

 

  return (
    <>
      <div className="home" id="Home">
        <div className="intro">
          <p className={`greetings ${showTypewriter ? "typewriter" : ""}`}></p>
          <p className={`intro-name ${showTypewriter ? "typewriter" : ""}`}></p>
          <div className={`short-info ${showInfoText ? "" : "hide"}`}>
            {infoText}
          </div>
          <div className={`intro-icons ${showInfoText ? "" : "hide"}`}>
            <a
              href={showInfoText ? "https://www.facebook.com/marknoe.fetero/" : null}
              target="_blank"
            >
              <IconBrandFacebook size={28} className="icons" />
            </a>
            <a
              href={showInfoText ? "https://github.com/mrknoee?tab=repositories" : null}
              target="_blank"
            >
              <IconBrandGithub size={28} className="icons" />
            </a>
            <a
              href={showInfoText ? "https://www.linkedin.com/in/mark-noe-fetero-44b768254/" : null}
              target="_blank"
            >
              <IconBrandLinkedin size={28} className="icons" />
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
