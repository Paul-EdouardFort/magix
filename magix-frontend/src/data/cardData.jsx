import mugger from "../assets/img/Mugger.png"
import Goblin from "../assets/img/Goblin.png"
import GnomeChild from "../assets/img/Gnome_child_chathead.png"
import Spider from "../assets/img/Spider.png"
import Boar from "../assets/img/Boar.png"
import AnimatedBronzeArmour from "../assets/img/Animated_Bronze_Armour.png"
import KingRoald from "../assets/img/King_Roald.png"
import ImpChampion from "../assets/img/Imp_Champion.png"
import Bear from "../assets/img/Grizzly_bear.png"
import BloodSnail from "../assets/img/Blood_Blamish_Snail.png"
import VarrockGuard from "../assets/img/Guard_Varrock.png"
import Terrorbird from "../assets/img/Terrorbird.png"
import PenanceFighter from "../assets/img/Penance_Fighter.png"
import PenanceRanger from "../assets/img/Penance_Ranger.png"
import ZalcGolem from "../assets/img/Golem.png"
import AcidicBloodveld from "../assets/img/Acidic_Bloodveld.png"
import Ugthanki from "../assets/img/Ugthanki.png"
import Splatter from "../assets/img/Splatter.png"
import VarrockChemist from "../assets/img/Apothecary.png"
import ArdyKnight from "../assets/img/Knight_of_Ardougne.png"
import TzKih from "../assets/img/Tz-Kih.png"
import Minotaur from "../assets/img/Minotaur.png"
import Catablepon from "../assets/img/Catablepon.png"
import Nechryael from "../assets/img/Nechryael.png"
import Necromancer from "../assets/img/Necromancer.png"
import Dharok from "../assets/img/Dharok_the_Wretched.png"
import Brawler from "../assets/img/Brawler.png"
import Hellhound from "../assets/img/Hellhound.png"
import BrassicanMage from "../assets/img/Brassican_Mage.png"
import Glough from "../assets/img/Glough.png"
import Dawn from "../assets/img/Dawn.png"
import TheEverlasting from "../assets/img/The_Everlasting.png"
import Jad from "../assets/img/TzTok-Jad.png"
import BarrelBomb from "../assets/img/Barrel_bomb.png"
export default function cardData(id=0) {
    let intid = parseInt(id)
    let cardData = [];
    //default values
    cardData["name"] = "Knight of Ardougne";
    cardData["image"] = ArdyKnight;

    switch(intid) {
        case 0:
            cardData["name"] = "Goblin";
            cardData["image"] = Goblin;
            break;
        case 1:
            cardData["name"] = "GnomeChild";
            cardData["image"] = GnomeChild;
            break;
        case 2:
            cardData["name"] = "Spider";
            cardData["image"] = Spider;
            break;
        case 3:
            cardData["name"] = "Boar";
            cardData["image"] = Boar;
            break;
        case 4:
            cardData["name"] = "Animated Bronze Armour";
            cardData["image"] = AnimatedBronzeArmour;
            break;
        case 5:
            cardData["name"] = "King Roald";
            cardData["image"] = KingRoald;
            break;
        case 6:
            cardData["name"] = "ImpChampion";
            cardData["image"] = ImpChampion;
            break;
        case 7:
            cardData["name"] = "Bear";
            cardData["image"] = Bear;
            break;
        case 8:
            cardData["name"] = "BloodSnail";
            cardData["image"] = BloodSnail;
            break;
        case 9:
            cardData["name"] = "VarrockGuard";
            cardData["image"] = VarrockGuard;
            break;
        case 10:
            cardData["name"] = "Terrorbird";
            cardData["image"] = Terrorbird;
            break;
        case 11:
            cardData["name"] = "PenanceFighter";
            cardData["image"] = PenanceFighter;
            break;
        case 12:
            cardData["name"] = "PenanceRanger";
            cardData["image"] = PenanceRanger;
            break;
        case 13:
            cardData["name"] = "ZalcGolem";
            cardData["image"] = ZalcGolem;
            break;
        case 14:
            cardData["name"] = "AcidicBloodveld";
            cardData["image"] = AcidicBloodveld;
            break;
        case 15:
            cardData["name"] = "Ugthanki";
            cardData["image"] = Ugthanki;
            break;
        case 16:
            cardData["name"] = "Splatter";
            cardData["image"] = Splatter;
            break;
        case 17:
            cardData["name"] = "Ingald Belger";
            cardData["image"] = VarrockChemist;
            break;
        case 18:
            cardData["name"] = "Knight of Ardougne";
            cardData["image"] = ArdyKnight;
            break;
        case 19:
            cardData["name"] = "Tz-Kih";
            cardData["image"] = TzKih;
            break;
        case 20:
            cardData["name"] = "Minotaur";
            cardData["image"] = Minotaur;
            break;
        case 21:
            cardData["name"] = "Catablepon";
            cardData["image"] = Catablepon;
            break;
        case 22:
            cardData["name"] = "Nechryael";
            cardData["image"] = Nechryael;
            break;
        case 23:
            cardData["name"] = "Necromancer";
            cardData["image"] = Necromancer;
            break;
        case 24:
            cardData["name"] = "Dharok the Wretched";
            cardData["image"] = Dharok;
            break;
        case 25:
            cardData["name"] = "Brawler";
            cardData["image"] = Brawler;
            break;
        case 26:
            cardData["name"] = "Hellhound";
            cardData["image"] = Hellhound;
            break;
        case 27:
            cardData["name"] = "Brassican Mage";
            cardData["image"] = BrassicanMage;
            break;
        case 28:
            cardData["name"] = "Glough";
            cardData["image"] = Glough;
            break;
        case 29:
            cardData["name"] = "Dawn";
            cardData["image"] = Dawn;
            break;
        case 30:
            cardData["name"] = "The Everlasting";
            cardData["image"] = TheEverlasting;
            break;
        case 31:
            cardData["name"] = "Jad";
            cardData["image"] = Jad;
            break;
        case 32:
            cardData["name"] = "Barrel Bomb";
            cardData["image"] = BarrelBomb;
            break;
        case 33:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 34:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 35:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 36:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 37:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 38:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 39:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 40:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 41:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 42:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 43:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 44:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 45:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 46:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 47:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 48:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 49:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 50:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 51:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 52:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 53:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 54:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 55:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 56:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 57:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 58:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 59:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 60:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 61:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 62:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 63:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 64:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 65:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 66:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 67:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 68:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 69:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 70:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 71:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 72:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 73:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 74:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 75:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 76:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 77:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 78:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 79:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 80:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 81:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 82:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 83:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 84:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 85:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 86:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 87:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 88:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 89:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 90:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 91:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 92:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 93:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 94:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 95:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 96:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 97:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 98:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 99:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 100:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 101:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 102:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 103:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 104:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 105:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 106:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 107:
            cardData["name"] = "Mugger";
            cardData["image"] = mugger;
            break;
        case 108:
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