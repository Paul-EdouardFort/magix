export default function heroData(heroClass="") {

    let imgsrc = "";
    switch(heroClass) {
        case "Warrior":
            imgsrc = "/img/Warrior.png";
            break;
        case "Priest":
            imgsrc = "/img/Priest.png";
            break;
        case "Hunter":
            imgsrc = "/img/Guild_hunter.png";
            break;
        case "Warlock":
            imgsrc = "/img/Warlock.png";
            break;
        case "DemonHunter":
            imgsrc = "/img/DemonHunter.png";
            break;
        case "Rogue":
            imgsrc = "/img/Rogue.png";
            break;
        case "Paladin":
            imgsrc = "/img/Paladin.png";
            break;
        case "Shaman":
            imgsrc = "/img/Shaman.png";
            break;
        case "Druid":
            imgsrc = "/img/Druid.png";
            break;
        case "Mage":
            imgsrc = "/img/Mage.png";
            break;
        default :
            imgsrc = "/img/Bob_the_cat.png";
            break;
    }
    return imgsrc;
};