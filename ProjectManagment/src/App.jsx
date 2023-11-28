import { useState } from "react";
import AddProject from "./components/AddProject";
import NoProjectSelelcted from "./components/NoProjectSelelcted";
import Sidebar from "./components/Sidebar";

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

  let content;

  if (projectState.selectedProjectId === null) {
    content = <AddProject onAdd={handleAddProjectDetails} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelelcted onStartAddProject={handleAddProjectButton} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onstartAddProject={handleAddProjectButton} projects={projectState.projects} />
      {content}
    </main>

  );
}

export default App;
