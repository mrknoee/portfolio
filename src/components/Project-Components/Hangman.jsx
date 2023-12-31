import {IconBrandGithub} from '@tabler/icons-react';

export default function Hangman(){



    return(
        <>
        <div className="project-1">
            <div className="blur">
            </div>
        <div className="carousel-wrapper">
            <span id="upitem-1" />
            <span id="upitem-2" />
            <span id="upitem-3" />
            <div className="carousel-item upitem-1"  >
            <a href="#upitem-3" className="arrow-prev arrow" />
            <a href="#upitem-2" className="arrow-next arrow" />
            </div>
            <div className="carousel-item upitem-2">
            <a href="#upitem-1" className="arrow-prev arrow" />
            <a href="#upitem-3" className="arrow-next arrow" />
            </div>
            <div className="carousel-item upitem-3">
            <a href="#upitem-2" className="arrow-prev arrow" />
            <a href="#upitem-1" className="arrow-next arrow" />
            </div>
        </div>
        <div className="project-details">
            <div className="project-title">
                Up Guessing Game
                <a
              href="https://github.com/mrknoee/hangman-balloon"
              target="_blank"
            >
              <IconBrandGithub  className="git-icon" />
            </a>
            </div>
            <div className="project-info">
            A word-guessing game inspired by the movie "Up," where players suggest letters to identify a word. In this project I implemented 
            the audio sound effects and modals of the game. 
            </div>
            <div className="git-links">
            <a href="https://hangman-balloon-ten.vercel.app/" target="_blank"  className = "project-link" style={{color:"#fff"}}>hangman.app</a>

            </div>


        </div>

        </div>
        </>
    );
}
