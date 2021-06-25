import React from  'react';

function Navigation (props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <nav className="d-flex justify-content-end ">
            <div className="d-flex  justify-content-around" >
                <ul className="d-flex  list-unstyled">
                    <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                        <h3 onClick={() => setCurrentTab("about")}>About Me</h3>
                    </li>
                    <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                        <h3 onClick={() => setCurrentTab("portfolio")}>Portfolio</h3>
                    </li>
                    <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
                        <h3 onClick={() => setCurrentTab("contact")}>Contact</h3>
                    </li>
                    <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
                        <h3 onClick={() => setCurrentTab("resume")}>Resume</h3>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;