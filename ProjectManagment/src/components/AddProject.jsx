import Input from "./Input.jsx";
export default function AddProject(){
    return(    
        <div className="w-[35rem] mt-16"> 
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="px-6 py-2 rounded-md bg-gray-300 hover:text-white">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-green-800 text-stone-50 hover:text-red-500">Save</button>
                </li>
            </menu>
            <div>
                <Input label ='Title' />
                <Input label = "Description" />
                <Input label = 'Due Date' />
            </div>
        </div>
    );
}