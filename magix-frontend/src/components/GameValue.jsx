//For health, money and amount of cards left in deck
export default function GameValue({ src="", className = "",value="0",maxValue=" "}) {
 
    return <div className={"bg-stone-500 flex flex-row flex-none justify-center items-center border bg-contain bg-no-repeat bg-center " +  className} style={{backgroundImage: "url(" + src + ")"}} >
        
        
        <p className="text-yellow-300 text-shadow-black text-shadow-lg/90 text-center">{value} / {maxValue}</p>
            

    </div>
}