import cardData from "../data/cardData"
import inventory from "../assets/img/Inventory_tab.png"
export default function Card({id=0,cost=0,hp=0,atk=0,mechanics=[],uid=0,baseHP,onClick, className="",state="SLEEP",isSelected=false,turn=false}) {
    let card_data = cardData(id);
    let atkColor = " text-white "
    if (state == "IDLE" && turn)
        atkColor = " text-red-500 "
    if (isSelected) 
        className += " border border-yellow-300 border-[5px] "
    return <div onClick={() => {
            onClick(uid);
        }} className={"w-[18.54vh] h-[25vh] bg-[url(../assets/img/Inventory_tab.png)] bg-cover bg-no-repeat text-yellow-300 flex flex-none flex-col text-center items-center outline-offset-[-2px] p-2" + className}  >
        <div className="h-[15%] flex-none text-center flex align-center">
            <p className="text-[100%]/0 self-center">{card_data["name"]}</p>
        </div>
        <div className="h-[40%] w-[80%] flex-none pl-[10%] pr-[10%] bg-stone-500 border border-black">
            <img className="object-contain w-full h-full" src={card_data["image"]}></img> 
        </div>
        <div className="py-[1%]"></div>
        <div className="h-[45%] w-full flex-none text-left overflow-hidden flex flex-row gap-[2px]">
            <div className="text-[60%] w-[66%] h-[100%]">
                {mechanics.map(mechanic => {
                     return <p>{mechanic}</p>
                })}
            </div>

            <div className="w-[34%] h-[100%]">
                <div className="h-[20%] w-full bg-stone-500 flex border border-black ">
                    <img src="/img/Prayer_icon_detail.png" alt="" className="aspect-square h-[100%]"/>
                    <p className="text-white text-center basis-1/2 text-[1.5vh]/0 drop-shadow-xs self-center" >{cost}</p>  
                </div>
                <div className="h-[25%]"></div>
                <div className="h-[20%] w-full bg-stone-500 flex border border-black ">
                    <img src="/img/Hitpoints_icon_detail.png" alt="" className="aspect-square h-[100%]"/>
                    <p className="text-white text-center basis-1/2 text-[1.5vh]/0 drop-shadow-xs self-center" >{hp}</p>  
                </div>
                <div className="h-[5%]"></div>
                <div className="h-[20%] w-full bg-stone-500 flex border border-black ">
                    <img src="/img/Attack_icon_detail.png" alt="" className="aspect-square h-[100%]"/>
                    <p className={"text-center basis-1/2 text-[1.5vh]/0 drop-shadow-xs self-center " + atkColor} >{atk}</p>  
                </div>
            </div>
        </div>
    </div>
}