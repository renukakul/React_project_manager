import { useRef } from "react";

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function AddProject({onAdd}){

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSaveButton(){
        const eneterdTitle = title.current.value;
        const eneterdDescription = description.current.value;
        const eneterdDueDate = dueDate.current.value;

        if (eneterdTitle.trim()=== '' || eneterdDescription.trim() === '' || eneterdDueDate.trim() === ''){
            
            modal.current.open();
            return;
        }

        onAdd({
            title : eneterdTitle,
            description : eneterdDescription,
            dueDate : eneterdDueDate
        });
    }
    
    return(  
        <> 
            <Modal ref={modal}>
                <h2>Invalid Input</h2>
                <p>Oops... looks like you forgot to enter a value.</p>
            </Modal>
            <div className="w-[35rem] mt-16"> 
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="px-6 py-2 rounded-md bg-gray-300 hover:text-white">
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-green-800 text-stone-50 hover:text-red-500"
                        onClick={handleSaveButton}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label ='Title' />
                    <Input ref={description} label = "Description" />
                    <Input ref={dueDate} type="date" label = 'Due Date' />
                </div>
            </div>
        </>
    );
}