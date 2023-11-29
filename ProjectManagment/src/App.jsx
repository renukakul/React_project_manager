import { useState } from "react";
import AddProject from "./components/AddProject";
import NoProjectSelelcted from "./components/NoProjectSelelcted";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectProject";

function App() {
  const [projectState, setProjectState] =useState({selectedProjectId :undefined, projects :[], tasks : []});

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

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleClearTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  
  const selectedProjectTask = projectState.tasks.filter(task => task.projectId === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask= {handleClearTask} tasks={selectedProjectTask}/>;

  if (projectState.selectedProjectId === null) {
    content = <AddProject onAdd={handleAddProjectDetails} onCancel={handleCancelButton} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelelcted onStartAddProject={handleAddProjectButton} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onstartAddProject={handleAddProjectButton} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId} tasks={projectState.tasks} />
      {content}
    </main>

  );
}

export default App;
