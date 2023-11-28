import { useState } from "react";
import AddProject from "./components/AddProject";
import NoProjectSelelcted from "./components/NoProjectSelelcted";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectProject";

function App() {
  const [projectState, setProjectState] =useState({selectedProjectId :undefined, projects :[]});

  function handleAddProjectButton(){
    setProjectState(prevState=>{
      return ({
        ...prevState,
        selectedProjectId:null
      }
      );
    });
  }

  function handleAddProjectDetails(projectData){
    setProjectState((prevState)=> {
      const projectId =Math.random()
      const newProject = {
        ...projectData,
        id : projectId
      };
      return ({
          ...prevState,
          selectedProjectId : undefined,
          projects: [...prevState.projects, newProject]
        }
      );
    })
  };

  function handleCancelButton (){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId : undefined,
      }
    })
  }

  function handleSelectProject(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId : id,
      };
    })
  }

  



  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject}/>;

  if (projectState.selectedProjectId === null) {
    content = <AddProject onAdd={handleAddProjectDetails} onCancel={handleCancelButton} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelelcted onStartAddProject={handleAddProjectButton} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onstartAddProject={handleAddProjectButton} projects={projectState.projects} onSelectProject={handleSelectProject} />
      {content}
    </main>

  );
}

export default App;
