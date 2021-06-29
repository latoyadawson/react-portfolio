import React from 'react';
import './style.css';



function Footer() {
    // WHEN I view the footer
    // THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

    return(
       <footer className="footer">
           <div className="iconsBox d-flex">
                {/* github icon */}
                <a 
                    className="github icon"
                    href="https://github.com/latoyadawson" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={require("../../assets/images/githubIcon.png").default}
                        alt="Github"
                        className="logo"
                    />
                </a>
                {/* linked icon */}
                <a
                    className="linkedin icon"
                    href="https://www.linkedin.com/in/latoyadawson/"
                    target="_blank"
                    rel="noreferrer"
                    
                >
                    <img
                        src={require("../../assets/images/linkedinIcon.png").default}
                        alt="linked"
                        className="logo"
                    />
        
                </a>
                {/* twitter icon */}
                <a
                    className="twitter icon"
                    href="https://twitter.com/Latoya4Dawson"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={require("../../assets/images/twitterIcon.png").default}
                        alt="twitter"
                        className="logo"
                    />
                </a>
            </div>
       </footer> 
    )


}

export default Footer;
