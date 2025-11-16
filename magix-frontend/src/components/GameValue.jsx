//For health, money and amount of cards left in deck
export default function GameValue({ src="", className = "",value="0",maxValue=null}) {
 
    return <div className={"flex flex-row flex-none justify-center items-center bg-contain bg-no-repeat bg-center " +  className} style={{backgroundImage: "url(" + src + ")"}} >
        
        
        {maxValue ? (<p className="text-[3vh] text-yellow-500 text-shadow-black text-shadow-lg/90 text-center">{value} / {maxValue}</p>) 
        : (<p className="text-[3vh] text-yellow-500 text-shadow-black text-shadow-lg/90 text-center">{value}</p>)}
            

    </div>
}