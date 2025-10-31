export default function Button({type = "button", className = "",text="Lorem",children,onClick}) {
 
    return <button onClick={onClick} type={type} className={"rounded border border-slate-400 p-1 hover:bg-slate-300 " + className} >
        {text ?? children}
    </button>
}