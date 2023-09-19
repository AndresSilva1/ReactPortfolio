import Header from "../components/Header"
import projectData from "../data/projectData.json"

function Projects(){

    return(
        <div>
            <Header text="Projects Page!!!!!!" />
            {projectData.map(project=>(
                <div style={{margin: "10px", border:"solid black 1px"}}>
                    <img src={project.imageUrl}/>
                    <h4>{project.title}</h4>
                    <p>{ project.description}</p>
                    <a href={project.deployedLink}>Deployed Link</a>
                    <a href={project.githubUrl}>Github Repo</a>
                </div>
            ))}
        </div>
    )
}

export default Projects