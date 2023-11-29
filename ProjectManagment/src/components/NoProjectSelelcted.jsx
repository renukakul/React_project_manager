import noProjects from '../assets/noProjects.png';

export default function({onStartAddProject}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjects} alt='An Empty book' className="w-16 h-16 object-contain mx-auto"/>
            <h1 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h1>
            <h3 className="text-stone-400 mb-4">Select a Project or get started with a new one</h3>
            <p className="mt-8">
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-green-700 text-white  hover:text-red-600"
                onClick={onStartAddProject}>
                    Create New Project
                </button>
            </p>
        </div>
    )

}