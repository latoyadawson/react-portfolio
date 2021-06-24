import React from 'react'; 
import Card from "react-bootstrap/Card";

function Project(props) {
    
    //WHEN I am presented with the Portfolio section
    //THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
	
    // This imports the information for the current project sent down.
    const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const techUsed = currentProject.technologies;
	const deployLink = currentProject.deployed;
	const githubLink = currentProject.github;

    // This function parses the information from the array and creates a list.
	function getTech(techArray) {
		let techList = "";

		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}

		return techList;
	}



    return(
        <Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={require(`../../assets/images/${image}`)}
				className="card-image"
			/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Subtitle className="card-subtitle">Technologies Used</Card.Subtitle>
					<Card.Text className="card-techs">{getTechs(techUsed)}</Card.Text>
					<Card.Link href={deployLink} target="_blank" className="card-link">
						{name} App
					</Card.Link>
					<br></br>
					<Card.Link href={githubLink} target="_blank" className="card-link">
						{name} Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
    )

}

export default Project;