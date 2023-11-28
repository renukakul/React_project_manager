import { forwardRef } from "react";
import { ForwardedRef } from "react";


const Input = forwardRef(function Input ({label, ...props},ref){
const classes =
    'w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

    return(
        <p>
            <label>{label}</label>
            <input ref={ref} className={classes}{...props}/>

        </p>
    );    
});

export default Input