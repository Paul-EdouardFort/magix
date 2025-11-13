import cardData from "../data/cardData"
import inventory from "../assets/img/Inventory_tab.png"
export default function Card({id=0,cost=0,hp=0,atk=0,mechanics=[],uid=0,baseHP,onClick}) {
    let card_data = cardData(id);
    return <div onClick={() => onClick(uid)} className="w-[10vw] h-[25vh] bg-[url(../assets/img/Inventory_tab.png)] bg-cover flex flex-none flex-col text-center outline-offset-[-2px] p-2"  >
        <div className="h-[15%] flex flex-none flex-row justify-between">
            <p>{atk}</p>
            <p className="text-xl">{card_data["name"]}</p>
            <p>{hp}</p>
        </div>
        <div className="h-[50%] flex-none pl-[10%] pr-[10%] border-2 bg-stone-500">
            <img className="object-contain w-full h-full" src={card_data["image"]}></img> 
        </div>
        <div className="h-[35%] flex-none text-left overflow-hidden">
            <p>{id}</p>
            <p className="text-sm">{mechanics}</p>
        </div>
    </div>
}