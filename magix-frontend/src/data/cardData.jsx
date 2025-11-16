export default function cardData(id=0) {
    let intid = parseInt(id)
    let cardData = [];
    //default values
    cardData["name"] = "Knight of Ardougne";
    cardData["image"] = "/img/Goblin.png"

    switch(intid) {
        case 0:
            cardData["name"] = "Goblin";
            cardData["image"] = "/img/Goblin.png";
            break;
        case 1:
            cardData["name"] = "Gnome Child";
            cardData["image"] = "/img/Gnome_child_chathead.png";
            break;
        case 2:
            cardData["name"] = "Spider";
            cardData["image"] = "/img/Spider.png";
            break;
        case 3:
            cardData["name"] = "Boar";
            cardData["image"] = "/img/Boar.png";
            break;
        case 4:
            cardData["name"] = "Animated Armor";
            cardData["image"] = "/img/Animated_Bronze_Armour.png";
            break;
        case 5:
            cardData["name"] = "King Roald";
            cardData["image"] = "/img/King_Roald.png";
            break;
        case 6:
            cardData["name"] = "Imp Champion";
            cardData["image"] = "/img/Imp_Champion.png";
            break;
        case 7:
            cardData["name"] = "Bear";
            cardData["image"] = "/img/Grizzly_bear.png";
            break;
        case 8:
            cardData["name"] = "BloodSnail";
            cardData["image"] = "/img/Blood_Blamish_Snail.png";
            break;
        case 9:
            cardData["name"] = "VarrockGuard";
            cardData["image"] = "/img/Guard_Varrock.png"
            break;
        case 10:
            cardData["name"] = "Terrorbird";
            cardData["image"] = "/img/Terrorbird.png";;
            break;
        case 11:
            cardData["name"] = "PenanceFighter";
            cardData["image"] = "/img/Penance_Fighter.png";;
            break;
        case 12:
            cardData["name"] = "PenanceRanger";
            cardData["image"] = "/img/Penance_Ranger.png";;
            break;
        case 13:
            cardData["name"] = "ZalcGolem";
            cardData["image"] = "/img/Golem.png";;
            break;
        case 14:
            cardData["name"] = "AcidicBloodveld";
            cardData["image"] = "/img/Acidic_Bloodveld.png";;
            break;
        case 15:
            cardData["name"] = "Ugthanki";
            cardData["image"] = "/img/Ugthanki.png";;
            break;
        case 16:
            cardData["name"] = "Splatter";
            cardData["image"] = "/img/Splatter.png";;
            break;
        case 17:
            cardData["name"] = "Ingald Belger";
            cardData["image"] = "/img/Apothecary.png";;
            break;
        case 18:
            cardData["name"] = "Knight of Ardougne";
            cardData["image"] = "/img/Knight_of_Ardougne.png";;
            break;
        case 19:
            cardData["name"] = "Tz-Kih";
            cardData["image"] = "/img/Tz-Kih.png";;
            break;
        case 20:
            cardData["name"] = "Minotaur";
            cardData["image"] = "/img/Minotaur.png";;
            break;
        case 21:
            cardData["name"] = "Catablepon";
            cardData["image"] = "/img/Catablepon.png";;
            break;
        case 22:
            cardData["name"] = "Nechryael";
            cardData["image"] = "/img/Nechryael.png";;
            break;
        case 23:
            cardData["name"] = "Necromancer";
            cardData["image"] = "/img/Necromancer.png";;
            break;
        case 24:
            cardData["name"] = "Dharok the Wretched";
            cardData["image"] = "/img/Dharok_the_Wretched.png";;
            break;
        case 25:
            cardData["name"] = "Brawler";
            cardData["image"] = "/img/Brawler.png";;
            break;
        case 26:
            cardData["name"] = "Hellhound";
            cardData["image"] = "/img/Hellhound.png";;
            break;
        case 27:
            cardData["name"] = "Brassican Mage";
            cardData["image"] = "/img/Brassican_Mage.png";;
            break;
        case 28:
            cardData["name"] = "Glough";
            cardData["image"] = "/img/Glough.png";;
            break;
        case 29:
            cardData["name"] = "Dawn";
            cardData["image"] = "/img/Dawn.png";;
            break;
        case 30:
            cardData["name"] = "The Everlasting";
            cardData["image"] = "/img/The_Everlasting.png";;
            break;
        case 31:
            cardData["name"] = "Jad";
            cardData["image"] = "/img/TzTok-Jad.png";;
            break;
        case 32:
            cardData["name"] = "Barrel Bomb";
            cardData["image"] = "/img/Barrel_bomb.png";;
            break;
        default :
            cardData["name"] = "Mugger";
            cardData["image"] = "/img/Mugger.png";
            break;
    }
    return cardData;
};