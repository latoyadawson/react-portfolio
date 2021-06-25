import React from 'react';

function Resume() {
    return (
        <section>
        <div className="d-flex justify-content-start mx-5">
            <h1 className="page-header">My Resume</h1>
        </div>
        <div className="d-flex justify-content-start mx-5">
            <a href={require("../../assets/files/latoyaResume.pdf")} download>
                <h4>Download Resume</h4>
            </a>
        </div>
        <div className="d-flex flex-column justify-content-start mx-5">
            <h5>Front-End Proficiencies</h5>
            <ul className="unstyle">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>version control/Git</li> 
               
            </ul>
            <br></br>
            <h5>Back-End Proficiencies</h5>
            <ol>
                <li>APIs</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>Model View Controller (MVC)</li>
                <li>REST</li>

            </ol>
            <br></br>
            <h5>Dev Tool Proficiencies</h5>
            <ol>
                <li>Git</li>
                <li>npm</li>
                <li>Jest</li>
            </ol>
            <br></br>
            <h5>Database Proficiencies</h5>
            <ol>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>NoSQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ol>
        </div>
    </section>
    )
}

export default Resume;