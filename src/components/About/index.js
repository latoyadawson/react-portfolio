import React from 'react';

function About() {
    return (
        <section>
			<div className="d-flex justify-content-start mx-5" id="about">
				<h1 className="section-title">About Me</h1>
			</div>
			<div className="center mx-2">
				<img
					src={require('../../assets/images/bioPhoto.jpeg').default}
					alt="about-me"
					className="photo justify-content-start d-flex mx-5 my-5"
				/>
			</div>
			<div className="mx-5">
                <p>
                    My name is Latoya Dawson and I am 28 years old. I am from sunny Los Angeles, California. 
                    I am currently a Technical Program Manager at Disney Streaming(Hulu). My hope is to grow in my role,
                    by understanding the technical aspect of my job on a deeper level. I am currently enrolled in
                    a UCLA coding bootcamp in the hopes that I can understand the infrastructure and architecture 
                    at any company. 
                </p>
			</div>
		
        </section>
            
     
    )
}

export default About;
