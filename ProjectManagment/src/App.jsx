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

 
  let content;

  if (projectState.selectedProjectId === null) {
    content = <AddProject onAdd={handleAddProjectButton} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelelcted onStartAddProject={handleAddProjectButton} />;
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onstartAddProject={handleAddProjectButton} />
      {content}
    </main>

  );
}

export default App;
