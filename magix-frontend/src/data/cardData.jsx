export default function cardData(id=0) {
    let intid = parseInt(id)
    let cardData = [];
    //default values
    cardData["name"] = "Knight of Ardougne";
    cardData["image"] = "/img/Goblin.png"

    switch(intid) {
        case 1:
            cardData["name"] = "Rat";
            cardData["image"] = "/img/Rat.png";
            break;
        case 2:
            cardData["name"] = "Gnome Child";
            cardData["image"] = "/img/Gnome_child_chathead.png";
            break;
        case 3:
            cardData["name"] = "Spider";
            cardData["image"] = "/img/Spider.png";
            break;
        case 4:
            cardData["name"] = "Boar";
            cardData["image"] = "/img/Boar.png";
            break;
        case 5:
            cardData["name"] = "Animated Armor";
            cardData["image"] = "/img/Animated_Bronze_Armour.png";
            break;
        case 6:
            cardData["name"] = "King Roald";
            cardData["image"] = "/img/King_Roald.png";
            break;
        case 7:
            cardData["name"] = "Imp Champion";
            cardData["image"] = "/img/Imp_Champion.png";
            break;
        case 8:
            cardData["name"] = "Bear";
            cardData["image"] = "/img/Grizzly_bear.png";
            break;
        case 9:
            cardData["name"] = "BloodSnail";
            cardData["image"] = "/img/Blood_Blamish_Snail.png";
            break;
        case 10:
            cardData["name"] = "VarrockGuard";
            cardData["image"] = "/img/Guard_Varrock.png"
            break;
        case 11:
            cardData["name"] = "Terrorbird";
            cardData["image"] = "/img/Terrorbird.png";;
            break;
        case 12:
            cardData["name"] = "PenanceFighter";
            cardData["image"] = "/img/Penance_Fighter.png";;
            break;
        case 13:
            cardData["name"] = "PenanceRanger";
            cardData["image"] = "/img/Penance_Ranger.png";;
            break;
        case 14:
            cardData["name"] = "ZalcGolem";
            cardData["image"] = "/img/Golem.png";;
            break;
        case 15:
            cardData["name"] = "AcidicBloodveld";
            cardData["image"] = "/img/Acidic_Bloodveld.png";;
            break;
        case 16:
            cardData["name"] = "Ugthanki";
            cardData["image"] = "/img/Ugthanki.png";;
            break;
        case 17:
            cardData["name"] = "Dust Devil";
            cardData["image"] = "/img/Dust_devil.png";;
            break;
        case 18:
            cardData["name"] = "Ingald Belger";
            cardData["image"] = "/img/Apothecary.png";;
            break;
        case 19:
            cardData["name"] = "Knight of Ardougne";
            cardData["image"] = "/img/Knight_of_Ardougne.png";;
            break;
        case 20:
            cardData["name"] = "Tz-Kih";
            cardData["image"] = "/img/Tz-Kih.png";;
            break;
        case 21:
            cardData["name"] = "Minotaur";
            cardData["image"] = "/img/Minotaur.png";;
            break;
        case 22:
            cardData["name"] = "Catablepon";
            cardData["image"] = "/img/Catablepon.png";;
            break;
        case 23:
            cardData["name"] = "Nechryael";
            cardData["image"] = "/img/Nechryael.png";;
            break;
        case 24:
            cardData["name"] = "Necromancer";
            cardData["image"] = "/img/Necromancer.png";;
            break;
        case 25:
            cardData["name"] = "Dharok the Wretched";
            cardData["image"] = "/img/Dharok_the_Wretched.png";;
            break;
        case 26:
            cardData["name"] = "Brawler";
            cardData["image"] = "/img/Brawler.png";;
            break;
        case 27:
            cardData["name"] = "Hellhound";
            cardData["image"] = "/img/Hellhound.png";;
            break;
        case 28:
            cardData["name"] = "Brassican Mage";
            cardData["image"] = "/img/Brassican_Mage.png";;
            break;
        case 29:
            cardData["name"] = "Glough";
            cardData["image"] = "/img/Glough.png";;
            break;
        case 30:
            cardData["name"] = "Dark Beast";
            cardData["image"] = "/img/Dark_beast.png";;
            break;
        case 31:
            cardData["name"] = "The Everlasting";
            cardData["image"] = "/img/The_Everlasting.png";;
            break;
        case 32:
            cardData["name"] = "Jad";
            cardData["image"] = "/img/TzTok-Jad.png";;
            break;
        case 33:
            cardData["name"] = "Barrel Bomb";
            cardData["image"] = "/img/Barrel_bomb.png";;
            break;
        case 34:
            cardData["name"] = "Burntmeat";
            cardData["image"] = "/img/Burntmeat.png";;
            break;
        case 35:
            cardData["name"] = "Juna";
            cardData["image"] = "/img/Juna.png";;
            break;
        case 36:
            cardData["name"] = "Dagon'hai";
            cardData["image"] = "/img/Dagon'hai.png";;
            break;
        case 37:
            cardData["name"] = "Evil Chicken";
            cardData["image"] = "/img/Evil_Chicken.png";;
            break;
        case 38:
            cardData["name"] = "Normal Rabbit";
            cardData["image"] = "/img/Rabbit_holy_grail.png";;
            break;
        case 39:
            cardData["name"] = "Zulrah";
            cardData["image"] = "/img/Zulrah.png";;
            break;
        case 40:
            cardData["name"] = "Vyrelady";
            cardData["image"] = "/img/Vyre.png";;
            break;
        case 41:
            cardData["name"] = "Banshee";
            cardData["image"] = "/img/banshee.png";;
            break;
        case 42:
            cardData["name"] = "General Bentnoze";
            cardData["image"] = "/img/General_Bentnoze.png";;
            break;
        case 43:
            cardData["name"] = "General Bentnoze";
            cardData["image"] = "/img/General_Bentnoze.png";;
            break;
        case 44:
            cardData["name"] = "General Wartface";
            cardData["image"] = "/img/General_Wartface.png";;
            break;
        case 45:
            cardData["name"] = "Greater demon";
            cardData["image"] = "/img/Greater_demon.png";;
            break;
        case 46:
            cardData["name"] = "Dad";
            cardData["image"] = "/img/Dad.png";;
            break;
        case 47:
            cardData["name"] = "Sea Slug";
            cardData["image"] = "/img/Sea_Slug.png";;
            break;
        case 48:
            cardData["name"] = "King Narnode";
            cardData["image"] = "/img/King_Narnode_Shareen.png";;
            break;
        case 49:
            cardData["name"] = "Glouphrie";
            cardData["image"] = "/img/Barrel_bomb.png";;
            break;
        case 50:
            cardData["name"] = "Strange Object";
            cardData["image"] = "/img/Strange_object.png";;
            break;
        case 51:
            cardData["name"] = "Vanescula Drakan";
            cardData["image"] = "/img/Vanescula_Drakan.png";;
            break;
        case 52:
            cardData["name"] = "War Tortoise";
            cardData["image"] = "/img/Tortoise.png";;
            break;
        case 53:
            cardData["name"] = "Fairy Godfather";
            cardData["image"] = "/img/Fairy_Godfather.png";;
            break;
        case 54:
            cardData["name"] = "Yama";
            cardData["image"] = "/img/Yama.png";;
            break;
        case 55:
            cardData["name"] = "King Awowogei";
            cardData["image"] = "/img/Awowogei.png";;
            break;
        case 56:
            cardData["name"] = "Warped Terrorbird";
            cardData["image"] = "/img/Warped_Terrorbird.png";;
            break;
        case 57:
            cardData["name"] = "Demonic Gorilla";
            cardData["image"] = "/img/Demonic_gorilla.png";;
            break;
        case 58:
            cardData["name"] = "Duradel";
            cardData["image"] = "/img/Duradel.png";;
            break;
        case 59:
            cardData["name"] = "Spinner";
            cardData["image"] = "/img/Spinner.png";;
            break;
        case 60:
            cardData["name"] = "Lesser Thrall";
            cardData["image"] = "/img/Lesser_thrall.png";;
            break;
        case 61:
            cardData["name"] = "Hellpuppy";
            cardData["image"] = "/img/Hellpuppy.png";;
            break;
        case 62:
            cardData["name"] = "Greater Thrall";
            cardData["image"] = "/img/Thrall.png";;
            break;
        case 63:
            cardData["name"] = "Crypt rat";
            cardData["image"] = "/img/Crypt_rat.png";;
            break;
        case 64:
            cardData["name"] = "Dawn";
            cardData["image"] = "/img/Dawn.png";;
            break;
        case 65:
            cardData["name"] = "Splatter";
            cardData["image"] = "/img/Splatter.png";;
            break;
        case 66:
            cardData["name"] = "White Wolf";
            cardData["image"] = "/img/White_wolf.png";;
            break;
        case 67:
            cardData["name"] = "Custodian Stalker";
            cardData["image"] = "/img/Custodian_stalker.png";;
            break;
        case 68:
            cardData["name"] = "Zombified Spawn";
            cardData["image"] = "/img/Zombified_Spawn.png";;
            break;
        case 69:
            cardData["name"] = "Elena";
            cardData["image"] = "/img/Elena.png";;
            break;
        case 70:
            cardData["name"] = "Robin";
            cardData["image"] = "/img/Robin.png";;
            break;
        case 71:
            cardData["name"] = "Mirrorback";
            cardData["image"] = "/img/Mirrorback_Araxyte.png";;
            break;
        case 72:
            cardData["name"] = "Tz-Kek";
            cardData["image"] = "/img/Tz-Kek.png";;
            break;
        case 73:
            cardData["name"] = "Monk";
            cardData["image"] = "/img/Monk.png";;
            break;
        case 74:
            cardData["name"] = "Strangled Bear";
            cardData["image"] = "/img/Strangled_Bear.png";;
            break;
        case 75:
            cardData["name"] = "Strangled";
            cardData["image"] = "/img/Strangled.png";;
            break;
        case 76:
            cardData["name"] = "Vardorvis";
            cardData["image"] = "/img/Vardorvis.png";;
            break;
        case 77:
            cardData["name"] = "Tranquility";
            cardData["image"] = "/img/Brother_Tranquility.png";;
            break;
        case 78:
            cardData["name"] = "Dark Kebbit";
            cardData["image"] = "/img/Dark_kebbit.png";;
            break;
        case 79:
            cardData["name"] = "Wilough";
            cardData["image"] = "/img/Wilough.png";;
            break;
        case 80:
            cardData["name"] = "Evil Bob";
            cardData["image"] = "/img/Evil_Bob.png";;
            break;
        case 81:
            cardData["name"] = "The Thing";
            cardData["image"] = "/img/Sheep_(penguins).png.png";
            break;
        case 82:
            cardData["name"] = "Evil Creature";
            cardData["image"] = "/img/Evil_Creature.png";;
            break;
        case 83:
            cardData["name"] = "Sand Crab";
            cardData["image"] = "/img/Sand_Crab.png";;
            break;
        case 84:
            cardData["name"] = "KGP Agent";
            cardData["image"] = "/img/KGP_Agent.png";;
            break;
        case 85:
            cardData["name"] = "Cabin Boy Jenkins";
            cardData["image"] = "/img/Cabin_Boy_Jenkins.png";;
            break;
        case 86:
            cardData["name"] = "Gemstone Crab";
            cardData["image"] = "/img/Gemstone_Crab.png";;
            break;
        case 87:
            cardData["name"] = "Wall Beast";
            cardData["image"] = "/img/Wall_Beast.png";;
            break;
        case 88:
            cardData["name"] = "Rock Crab";
            cardData["image"] = "/img/Rock_Crab.png";;
            break;
        case 89:
            cardData["name"] = "Ammonite Crab";
            cardData["image"] = "/img/Ammonite Crab.png";;
            break;
        case 90:
            cardData["name"] = "Flawed Golem";
            cardData["image"] = "/img/FLawed_Golem.png";;
            break;
        case 91:
            cardData["name"] = "Goblin";
            cardData["image"] = "/img/Goblin.png";;
            break;
        case 92:
            cardData["name"] = "Sliske";
            cardData["image"] = "/img/Sliske.png";;
            break;
        case 93:
            cardData["name"] = "Abyssal Sire";
            cardData["image"] = "/img/Abyssal_Sire.png";;
            break;
        case 94:
            cardData["name"] = "Nylocas";
            cardData["image"] = "/img/Nylocas.png";;
            break;
        case 95:
            cardData["name"] = "Gryphon";
            cardData["image"] = "/img/Gryphon.png";;
            break;
        case 96:
            cardData["name"] = "Duke Sucellus";
            cardData["image"] = "/img/Duke_Sucellus.png";;
            break;
        case 97:
            cardData["name"] = "Melzar the Mad";
            cardData["image"] = "/img/Melzar_the_Mad.png";;
            break;
        case 98:
            cardData["name"] = "Chaos Fanatic";
            cardData["image"] = "/img/Chaos_Fanatic.png";;
            break;
        case 99:
            cardData["name"] = "Chaos Elemental";
            cardData["image"] = "/img/Chaos_Elemental.png";;
            break;
        case 100:
            cardData["name"] = "Crazy Archaeologist";
            cardData["image"] = "/img/Crazy_archaeologist.png";;
            break;
        case 101:
            cardData["name"] = "Safalaan";
            cardData["image"] = "/img/Safalaan_Hallow.png";;
            break;
        case 102:
            cardData["name"] = "General Khazard";
            cardData["image"] = "/img/General_Khazard.png";;
            break;
        case 103:
            cardData["name"] = "Penance Healer";
            cardData["image"] = "/img/Penance_Healer.png";;
            break;
        case 104:
            cardData["name"] = "Balance Elemental";
            cardData["image"] = "/img/Balance_Elemental.png";;
            break;
        case 105:
            cardData["name"] = "Araxxor";
            cardData["image"] = "/img/Araxxor.png";;
            break;
        case 106:
            cardData["name"] = "Ivan Strom";
            cardData["image"] = "/img/Ivan Strom.png";;
            break;
        case 107:
            cardData["name"] = "Parasite";
            cardData["image"] = "/img/Parasite.png";;
            break;
        case 108:
            cardData["name"] = "Me";
            cardData["image"] = "/img/Me.png";;
            break;
        case 109:
            cardData["name"] = "Lord Drakan";
            cardData["image"] = "/img/Lowerniel_Drakan.png";;
            break;
        default :
            cardData["name"] = "Mugger";
            cardData["image"] = "/img/Mugger.png";
            break;
    }
    return cardData;
};