
export default function Sidebar({onstartAddProject, projects}){
    return (
        <aside  className="w-1/3 px-8 py-16 bg-violet-500 text-stone-50 md:w-72 rounded-r-3xl">
            <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h1>

            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-green-700 text-white  hover:text-red-600"
             onClick={onstartAddProject}>
                +Add Project
            </button>
            <h3 className="px-1 py-8 mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h3>
            <ul className="mt-8">
                {projects.map((project=> 
                    <li key={project.id}>
                        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-green-700 text-white  hover:text-red-600">
                            {project.title}
                        </button>
                    </li>
                    ))
                }
                   

            </ul>
        </aside>
    );
}