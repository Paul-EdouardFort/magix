import mugger from "../assets/img/Mugger.png"
export default function cardData({id=0}) {
    let cardData = [];
    switch(id) {
        case 0:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        default :
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
    }
    return cardData;
};