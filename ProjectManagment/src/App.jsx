import AddProject from "./components/AddProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <AddProject />
    </main>

  );
}

export default App;
