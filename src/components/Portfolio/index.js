import React from 'react';
import Project from '../Project'
import './style.css';

function Portfolio() {
    const projects = [
        {
            name:'Music My Meal',
            description: 'This is a web application that generates a recipie, nutirion facts along with a song to cook to! It takes the guess work out of deciding what to cook and makes it fun!',
            image:'meal-picker.png',
            technologies: ['JavaScript'],
            github: 'https://github.com/albertjly/meal-music-picker',
            deployed:'https://albertjly.github.io/meal-music-picker/' ,
        },
        {
            name:'Stream Search',
            description: 'A website that searches for which tv or movie is on which streaming platform (since there are so many). You can sign up and login and save it to your profile. You can click the show and it will link you to streaming service website and you can immediately start watching! This will make it easier to have all your favorite shows and movies in one place instead of logging into all your accounts indivi for the show you want to watch.',
            image:'stream-search.png',
            technologies: ['MERN'],
            github: 'https://github.com/RayTakemura/StreamSearch',
            deployed:'https://awesome-stream-search.herokuapp.com/' ,
        },
        {
            name:'Vault',
            description: 'Budget website where users can keep track of their income, budget a month in advance.',
            image:'dashboard.png',
            technologies: ['JavaScript', 'Express.js', 'Handlebars.js', 'Sequelize', 'Dotenv', 'Express-Session'],
            github: 'https://github.com/latoyadawson/Vault',
            deployed:'https://git.heroku.com/vault-ucla.git' ,
        },
        {
            name:'Weather Dashboard',
            description: 'This is a weather daboard that retrieves weather data for cities from a server side API.',
            image:'weather-dashboard.png',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Moment.js', 'Bootstrap'],
            github: 'https://github.com/latoyadawson/weather-dashboard',
            deployed:'https://latoyadawson.github.io/weather-dashboard/' ,
        },
        {
            name:'Password Generator',
            description: 'A website that automatically generates a passcode with different criteria that a user selects.',
            image:'password-generator.png',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/latoyadawson/password-generator',
            deployed:'https://latoyadawson.github.io/password-generator/' ,
        },
        {
            name:'Coding Quiz Challenge',
            description: 'This is a simple web page that is a point and click to navigate in browser. The Quiz will run through the set of questions while tracking time to completion. Upon reaching the end of the question set or running out of time, the game over logic will run, showing the users score for the current session, and allowing them to save the score to local memory.',
            image:'js-quiz.png',
            technologies: [' HTML','CSS','JavaScript'],
            github: 'https://github.com/latoyadawson/javascript-quiz',
            deployed:'https://latoyadawson.github.io/javascript-quiz/' ,
        },
        {
            name:'Work Day Scheduler',
            description: 'This is a simple web page that iis a simple calendar application that allows a user to save events for each hour of the day.',
            image:'daily-planner.png',
            technologies: ['HTML', 'CSS', 'JQuery', 'Moment.js'],
            github: 'https://github.com/latoyadawson/daily-planner',
            deployed:'https://latoyadawson.github.io/daily-planner/' ,
        }
    ]

    return (
        <section id="portfolio" className="Portfolio">
            <div className="header-section d-flex justify-content-start mx-5">
                <h1 className="section-title">Portfolio</h1>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-6 ">
                        <Project projects={projects[0]}></Project>
                    </div>
                        
                    <div className="col-6">
                        <Project projects={projects[1]}></Project>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 ">
                        <Project projects={projects[2]}></Project>
                    </div>
                        
                    <div className="col-6 ">
                        <Project projects={projects[3]}></Project>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 ">
                        <Project projects={projects[4]}></Project>
                    </div>
                        
                    <div className="col-6">
                        <Project projects={projects[5]}></Project>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 ">
                        <Project projects={projects[6]}></Project>
                    </div>
                        
                    
                </div>
            
            </div>
        </section>
    )
}

export default Portfolio;