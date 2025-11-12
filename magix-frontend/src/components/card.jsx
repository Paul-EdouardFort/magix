import cardData from "../data/cardData"
import inventory from "../assets/img/Inventory_tab.png"
export default function Card({id=0,cost=0,hp=0,atk=0,mechanics=[],uid=0,baseHP,onClick}) {
    let card_data = cardData(id);
    return <div onClick={onClick} className="w-[204px] h-[275px] bg-[url(../assets/img/Inventory_tab.png)] bg-cover"  >
        <p></p>
        <p>{card_data["name"]}</p> <img src={card_data["image"]}></img> 
    </div>
}