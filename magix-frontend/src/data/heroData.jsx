export default function heroData(heroClass="") {

    let imgsrc = "";
    switch(heroClass) {
        case 0:
            imgsrc = "/img/Teleport_card.png";
            break;
        default :
            imgsrc = "/img/Bob_the_cat.png";
            break;
    }
    return imgsrc;
};