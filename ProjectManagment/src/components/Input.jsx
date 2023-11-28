const classes =
    'w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

export default function ({label, ...props}){
    return(
        <p>
            <label>{label}</label>
            <input className={classes}{...props}/>

        </p>
    );    
}