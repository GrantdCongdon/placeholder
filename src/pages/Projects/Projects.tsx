import "./Projects.css";

const projectJson = require("./bulletPoints.json");

function getBulletPoints(projectKey : string) {
    const points = [];
    for (const i in projectJson[projectKey].bulletPoints) {
        points.push(<li>{projectJson[projectKey].bulletPoints[i]}</li>);
    }
    return points;
}

function getImages(projectKey : string) {
    const images = [];
    for (const i in projectJson[projectKey].images) {
        images.push(<img src={projectJson[projectKey].images[i]} alt={projectJson[projectKey].altText[i]}/>);
    }
    return images;
}

function getProject(projectKey : string) {
    const content = [];
    content.push(<div className="project-title-div"><h2>{projectJson[projectKey].projectName}</h2></div>);
    content.push(<div className="images">{getImages(projectKey)}</div>);
    content.push(<div className="description"><ul className="description-list">{getBulletPoints(projectKey)}</ul></div>);
    return content;
}

function Projects() {
    const projectList = [];
    for (const i in projectJson) {
        projectList.push(<div className="project">{getProject(i)}</div>);
    }
    return (
        <div className="container">
           {projectList}
           <div className="spacer"/>
        </div>
    );
}

export default Projects;