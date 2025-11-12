//For health, money and amount of cards left in deck
export default function GameValue({ src= "", className = "",value="0",maxValue=" "}) {
 
    return <div className={"" + className}>
    <img  src={src}></img>
    <p className={""}>{value} / {maxValue}</p>
    </div>
}