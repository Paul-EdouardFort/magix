//For health, money and amount of cards left in deck
export default function GameValue({ src="", className = "",value="0",maxValue=" "}) {
 
    return <div className={"bg-stone-500 flex-row flex-none border " + className} >
        
        
        <img className="flex-basis-1/2" src={src} alt="" />
        <p className="text-white text-shadow-black text-shadow-lg/50 text-center flex-basis-1/2">{value} / {maxValue}</p>
            

    </div>
}