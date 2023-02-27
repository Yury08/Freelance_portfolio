import Project from "../components/project/Project"
import { projects } from "./../helpers/projectsList";


const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">
                    <span className="change">P</span>
                    <span className="change">r</span>
                    <span className="change">o</span>
                    <span className="change">j</span>
                    <span className="change">e</span>
                    <span className="change">c</span>
                    <span className="change">t</span>
                    <span className="change">s</span>
                </h2>
                <ul className="projects">

                    {projects.map((project, index) => {
                        return <Project key={index} title={project.title} img={project.img} index={index} />;
                    })}

                </ul>
            </div>
        </main>
    );
}

export default Projects;