export default function Indicator({value=false, trueText="", falseText="", className}) {
    let texte = "";
    if (value){
        texte = trueText;
        className += " bg-green-500"
    }
    else {
        texte = falseText;
        className += " bg-red-500"
    }
    return <div className={"rounded p-1 text-black " + className} >
        {texte}
    </div>
}