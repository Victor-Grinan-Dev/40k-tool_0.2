export const armoury = {
  foehammer: {
    id: "foehammer",
    name: "Foehammer",
    profiles: [
      {
        profile: "ranged",
        rules: ["ANTI-MONSTER 2+", "ASSAULT"],
        range: 6,
        attacks: 1, //add to models attack value
        weapons_skill: 0,
        strength: "8",
        armour_penetration: "2",
        damage: "3",
      },
      {
        profile: "melee",
        rules: ["anti-monster 2+"],
        range: "melee",
        attacks: 5, //add to models attack value
        weapons_skill: 0,
        strength: "8",
        armour_penetration: "2",
        damage: "3",
      },
    ],
  },
  assault_cannon: {
    id: "assault_cannon",
    name: "Assault cannon",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["DEVASTATING WOUNDS"],
        range: 24,
        attacks: 6, //add to models attack value
        weapons_skill: 0,
        strength: "6",
        armour_penetration: "1",
        damage: "1",
      },
    ],
  },
  heavy_flamer: {
    id: "heavy_flamer",
    name: "Heavy flamer",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["IGNORES COVER", "TORRENT"],
        range: 12,
        attacks: "d6", //add to models attack value
        weapons_skill: "n/a",
        strength: "5",
        armour_penetration: "1",
        damage: "1",
      },
    ],
  },
  twin_lascannon: {
    id: "twin_lascannon",
    name: "Twin lascannon",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: [],
        range: 48,
        attacks: 1, //add to models attack value
        weapons_skill: 0,
        strength: "12",
        armour_penetration: "3",
        damage: "d6 + 1",
      },
    ],
  },
  heavy_plasma_cannon: {
    id: "heavy_plasma_cannon",
    name: "Heavy plasma cannon",
    profiles: [
      {
        profile: "standard",
        rules: ["BLAST"],
        range: 36,
        attacks: "d3", //add to models attack value
        weapons_skill: 0,
        strength: "7",
        armour_penetration: "2",
        damage: "2",
      },
      {
        profile: "supercharge",
        rules: ["BLAST", "HAZARDOUS"],
        range: 36,
        attacks: "d3", //add to models attack value
        weapons_skill: "2",
        strength: "8",
        armour_penetration: "3",
        damage: "3",
      },
    ],
  },
  hellfrost_cannon: {
    id: "hellfrost_cannon",
    name: "Heavy plasma cannon",
    profiles: [
      {
        profile: "dispersed",
        rules: ["TORRENT]"],
        range: 12,
        attacks: "d3", //add to models attack value
        weapons_skill: "n/a",
        strength: "6",
        armour_penetration: "1",
        damage: "2",
      },
      {
        profile: "focused",
        rules: ["BLAST", "HAZARDOUS"],
        range: 36,
        attacks: 1, //add to models attack value
        weapons_skill: 0,
        strength: "9",
        armour_penetration: "3",
        damage: "5",
      },
    ],
  },
  combi_weapon: {
    id: "combi_weapon",
    name: "Combi weapon",
    profiles: [
      {
        profile: null,
        rules: ["ANTI-INFANTRY 4+", "DEVASTATING WOUNDS", "RAPID FIRE 1"],
        range: 24,
        attacks: 1, //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    ],
  },
  flamer: {
    id: "flamer",
    name: "Flamer",
    profiles: [
      {
        profile: null,
        rules: ["IGNORES COVER", "TORRENT"],
        range: 12,
        attacks: "D6", //add to models attack value
        weapons_skill: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    ],
  },
  grav_gun: {
    id: "grav_gun",
    name: "Grav-gun",
    profiles: [
      {
        profile: null,
        rules: ["ANTI-VEHICLE 2+"],
        range: 18,
        attacks: 2, //add to models attack value
        weapons_skill: "3", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "2", // always string type
      },
    ],
  },
  grav_pistol: {
    id: "grav_pistol",
    name: "Grav-pistol",
    profiles: [
      {
        profile: null,
        rules: ["ANTI-VEHICLE 2+", "PISTOL"],
        range: 18,
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "1", //always positive
        damage: "2", // always string type
      },
    ],
  },
  hand_flamer: {
    id: "hand_flamer",
    name: "Hand flamer",
    profiles: [
      {
        profile: null,
        rules: ["IGNORES COVER", "TORRENT", "PISTOL"],
        range: 12,
        attacks: "D6", //add to models attack value
        weapons_skill: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "3",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    ],
  },
  inferno_pistol: {
    id: "inferno_pistol",
    name: "Inferno pistol",
    profiles: [
      {
        profile: null,
        rules: ["MELTA 2", "PISTOL"],
        range: 6,
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "4", //always positive
        damage: "D3", // always string type
      },
    ],
  },
  meltagun: {
    id: "meltagun",
    name: "Meltagun",
    profiles: [
      {
        profile: "standard",
        rules: ["MELTA 2"],
        range: 12,
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "9",
        armour_penetration: "4", //always positive
        damage: "D6", // always string type
      },
    ],
  },
  plasma_gun: {
    id: "plasma_gun",
    name: "Plasma gun",
    profiles: [
      {
        profile: "standard",
        rules: ["RAPID FIRE 1"],
        range: 24,
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "7",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
      {
        profile: "supercharge",
        rules: ["RAPID FIRE 1", "HAZARDOUS"],
        range: 24,
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "3", //always positive
        damage: "2", // always string type
      },
    ],
  },
  plasma_pistol: {
    id: "plasma_pistol",
    name: "Plasma pistol",
    profiles: [
      {
        profile: "standard",
        rules: ["PISTOL"],
        range: 12,
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "7",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
      {
        profile: "supercharge",
        rules: ["PISTOL", "HAZARDOUS"],
        range: 12,
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "3", //always positive
        damage: "2", // always string type
      },
    ],
  },
  plasma_cannon: {
    id: "plasma_cannon",
    name: "Plasma cannon",
    profiles: [
      {
        profile: "standard",
        rules: ["BLAST"],
        range: 36,
        attacks: "D3", //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "7",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
      {
        profile: "supercharge",
        rules: ["BLAST", "HAZARDOUS"],
        range: 36,
        attacks: "D3", //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "3", //always positive
        damage: "3", // always string type
      },
    ],
  },
  helfrost_destructor: {
    id: "helfrost_destructor",
    name: "Helfrost destructor",
    profiles: [
      {
        profile: "dispersed",
        rules: ["TORRENT"],
        range: 12,
        attacks: "D6+6", //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "1", //always positive
        damage: "2", // always string type
      },
      {
        profile: "focused",
        rules: ["SUSTAINED HITS D3"],
        range: 36,
        attacks: "D3", //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "11",
        armour_penetration: "3", //always positive
        damage: "7", // always string type
      },
    ],
  },
  helfrost_cannon: {
    id: "helfrost_cannon",
    name: "Helfrost cannon",
    profiles: [
      {
        profile: "dispersed",
        rules: ["TORRENT"],
        range: 12,
        attacks: "D3", //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "1", //always positive
        damage: "2", // always string type
      },
      {
        profile: "focused",
        rules: [],
        range: 36,
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "9",
        armour_penetration: "3", //always positive
        damage: "5", // always string type
      },
    ],
  },
  twin_helfrost_cannon: {
    id: "twin_helfrost_cannon",
    name: "Twin helfrost cannon",
    profiles: [
      {
        profile: "dispersed",
        rules: ["TORRENT", "TWIN-LINKED"],
        range: 12,
        attacks: "D3", //add to models attack value
        weapons_skill: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "1", //always positive
        damage: "2", // always string type
      },
      {
        profile: "focused",
        rules: ["TWIN-LINKED"],
        range: 36,
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "9",
        armour_penetration: "3", //always positive
        damage: "5", // always string type
      },
    ],
  },
  helfrost_pistol: {
    id: "helfrost_pistol",
    name: "Helfrost pistol",
    profiles: [
      {
        profile: "dispersed",
        rules: ["TORRENT", "PISTOL"],
        range: 12,
        attacks: "D3", //add to models attack value
        weapons_skill: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "3",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
      {
        profile: "focused",
        rules: ["PISTOL"],
        range: 36,
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "3", //always positive
        damage: "3", // always string type
      },
    ],
  },
  missile_launcher: {
    id: "missile_launcher",
    name: "Missile launcher",
    profiles: [
      {
        profile: "frag",
        rules: ["BLAST", "HEAVY"],
        range: 48,
        attacks: "D6", //add to models attack value
        weapons_skill: "1", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
      {
        profile: "krak",
        rules: ["HEAVY"],
        range: 48,
        attacks: 1, //add to models attack value
        weapons_skill: "1", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "9",
        armour_penetration: "2", //always positive
        damage: "D6", // always string type
      },
    ],
  },
  cyclone_missile_launcher: {
    id: "cyclone_missile_launcher",
    name: "Cyclone missile launcher",
    profiles: [
      {
        profile: "frag",
        rules: ["BLAST", "HEAVY"],
        range: 48,
        attacks: "2D6", //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
      {
        profile: "krak",
        rules: ["HEAVY"],
        range: 48,
        attacks: 2, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "9",
        armour_penetration: "2", //always positive
        damage: "D6", // always string type
      },
    ],
  },
  fenrisian_great_axe: {
    id: "fenrisian_great_axe",
    name: "Fenrisian great axe",
    profiles: [
      {
        profile: "strike",
        rules: [],
        range: "melee",
        attacks: 5, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "10",
        armour_penetration: "2", //always positive
        damage: "D6+1", // always string type
      },
      {
        profile: "sweep",
        rules: [],
        range: "melee",
        attacks: 10, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
    ],
  },
  the_axe_morkai: {
    id: "the_axe_morkai",
    name: "The Axe Morkai",
    profiles: [
      {
        profile: "one-handed",
        rules: [],
        range: "melee",
        attacks: 10, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
      {
        profile: "two-handed",
        rules: [],
        range: "melee",
        attacks: 6, //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "2", //always positive
        damage: "3", // always string type
      },
    ],
  },
  living_lightning: {
    id: "living_lightning",
    name: "Living Lightning",
    profiles: [
      {
        profile: "witchfire",
        rules: ["PSYCHIC", "SUSTAINED HITS 2"],
        range: "24",
        attacks: "D6", //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "7",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
      {
        profile: "focused witchfire",
        rules: ["PSYCHIC", "SUSTAINED HITS 2", "HAZARDOUS"],
        range: "24",
        attacks: "2D6", //add to models attack value
        weapons_skill: 0, //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "7",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    ],
  },
  storm_bolter: {
    id: "storm_bolter",
    name: "Storm bolter",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["RAPID FIRE 2"],
        range: 24,
        attacks: 2, //add to models attack value
        weapons_skill: "1",
        strength: "4",
        armour_penetration: "0",
        damage: "1",
      },
    ],
  },
  bolt_pistol: {
    id: "bolt_pistol",
    name: "bolt pistol",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["PISTOL"],
        range: 12,
        attacks: 1, //add to models attack value
        weapons_skill: 0,
        strength: "4",
        armour_penetration: "0",
        damage: "1",
      },
    ],
  },
  boltgun: {
    id: "boltgun",
    name: "boltgun",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["RAPID FIRE 1"],
        range: 24,
        attacks: 2, //add to models attack value
        weapons_skill: 0,
        strength: "4",
        armour_penetration: "0",
        damage: "1",
      },
    ],
  },
  skyhammer_missile_launcher: {
    id: "skyhammer_missile_launcher",
    name: "Skyhammer missile launcher",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["ANTI-FLY 2+"],
        range: 48,
        attacks: 3, //add to models attack value
        weapons_skill: 0,
        strength: "8",
        armour_penetration: "1",
        damage: "D3",
      },
    ],
  },
  twin_stormstrike_missile_launcher: {
    id: "twin_stormstrike_missile_launcher",
    name: "Twin stormstrike missile launcher",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["ANTI-FLY 2+"],
        range: 48,
        attacks: 1, //add to models attack value
        weapons_skill: 0,
        strength: "10",
        armour_penetration: "2",
        damage: "3",
      },
    ],
  },
  grav_cannon: {
    id: "grav_cannon",
    name: "Grav-cannon",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["[ANTI-VEHICLE 2+", "HEAVY]"],
        range: 24,
        attacks: 3, //add to models attack value
        weapons_skill: "1",
        strength: "6",
        armour_penetration: "1",
        damage: "3",
      },
    ],
  },
  heavy_bolter: {
    id: "heavy_bolter",
    name: "Heavy bolter",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["HEAVY", "SUSTAINED HITS 1"],
        range: 36,
        attacks: 3, //add to models attack value
        weapons_skill: "1",
        strength: "5",
        armour_penetration: "1",
        damage: "2",
      },
    ],
  },
  twin_heavy_bolter: {
    id: "twin_heavy_bolter",
    name: "Twin heavy bolter",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["HEAVY", "SUSTAINED HITS 1", "TWIN-LINKED"],
        range: 36,
        attacks: 3, //add to models attack value
        weapons_skill: "1",
        strengths: "5",
        armour_penetration: "1",
        damage: "2",
      },
    ],
  },
  lascannon: {
    id: "lascannon",
    name: "Lascannon",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["HEAVY"],
        range: 48,
        attacks: 1, //add to models attack value
        weapons_skill: "1",
        strength: "12",
        armour_penetration: "3",
        damage: "D6+1",
      },
    ],
  },
  multi_melta: {
    //add to models attack value
    id: "  //add to models attack va",
    name: "Mueapons_skillti-melta",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["MELTA 2", "HEAVY"],
        range: "18",
        attacks: 2, //add to models attack value
        weapons_skill: 0,
        strength: "9",
        armour_penetration: "4",
        damage: "d6",
      },
    ],
  },
  twin_multi_melta: {
    //add to models attack value
    id: "  //add to models attack va",
    name: "Twin mueapons_skillti-melta",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["MELTA 2", "HEAVY", "TWIN-LINKED"],
        range: "18",
        attacks: 2, //add to models attack value
        weapons_skill: 0,
        strength: "9",
        armour_penetration: "4",
        damage: "d6",
      },
    ],
  },

  stormfrag_auto_launcher: {
    id: "stormfrag_auto_launcher",
    name: "Stormfrag auto-launcher",
    profiles: [
      {
        profile: null,
        type: "range",
        rules: ["ASSAULT", "BLAST"],
        range: "12",
        attacks: "D6", //add to models attack value
        weapons_skill: 0,
        strength: "4",
        armour_penetration: "0",
        damage: "1",
      },
    ],
  },
  close_combat_weapon: {
    id: "close_combat_weapon",
    name: "Close combat weapon",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: +0, //add to models attack value (normal models / characters)
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    ],
  },
  combat_weapon: {
    id: "close_combat_weapon",
    name: "combat weapon",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: +0, //add to models attack value (normal models / characters)
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    ],
  },
  dreadnought_combat_weapon: {
    id: "dreadnought_combat_weapon",
    name: "Dreadnought combat weapon",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 5, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "12",
        armour_penetration: "2", //always positive
        damage: "3", // always string type
      },
    ],
  },
  great_wolf_claw: {
    id: "great_wolf_claw",
    name: "Great wolf claw",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 5, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "10",
        armour_penetration: "3", //always positive
        damage: "3", // always string type
      },
    ],
  },
  armoured_hull: {
    id: "armoured_hull",
    name: "Armoured hull",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 6, //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    ],
  },
  chainfist: {
    id: "chainfist",
    name: "Chainfist",
    profiles: [
      {
        profile: null,
        rules: ["ANTI-VEHICLE 3+"],
        range: "melee",
        attacks: +0, //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    ],
  },
  teeth_and_claws: {
    id: "teeth_and_claws",
    name: "Teeth and claws",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 2, //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    ],
  },
  crushing_teeth_and_claws: {
    id: "crushing_teeth_and_claws",
    name: "Crushing teeth and claws",
    profiles: [
      {
        profile: null,
        rules: ["EXTRA ATTACKS"], //add to models attack value
        range: "melee",
        attacks: 3, //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    ],
  },
  flurry_of_teeth_and_claws: {
    id: "flurry_of_teeth_and_claws",
    name: "Flurry of teeth and claws",
    profiles: [
      {
        profile: null,
        rules: ["EXTRA ATTACKS"], //add to models attack value
        range: "melee",
        attacks: 6, //add to models attack value
        weapons_skill: "2", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    ],
  },
  heirloom_weapon: {
    id: "heirloom_weapon",
    name: "Heirloom weapon",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 4, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    ],
  },
  wulfen_claws_and_melee_weapons: {
    id: "wulfen_claws_and_melee_weapons",
    name: "Wulfen claws and melee weapons",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 2, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    ],
  },
  wulfen_hammer: {
    id: "wulfen_hammer",
    name: "Wulfen claws and melee weapons",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: +0, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    ],
  },
  astartes_chainsword: {
    id: "astartes_chainsword",
    name: "Astartes chainsword",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: +1, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    ],
  },
  power_fist: {
    id: "power_fist",
    name: "Power fist",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: -1, //TO A MINIMUN OF 2, add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    ],
  },
  power_weapon: {
    id: "power_weapon",
    name: "Power weapon",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
    ],
  },

  relic_weapon: {
    id: "relic_weapon",
    name: "Relic weapon",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 1, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    ],
  },
  thunder_hammer: {
    id: "thunder_hammer",
    name: "Thunder hammer",
    profiles: [
      {
        profile: null,
        rules: ["DEVASTATING WOUNDS"],
        range: "melee",
        attacks: -1, //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    ],
  },
  Twin_lightning_claws: {
    id: "Twin_lightning_claws",
    name: "Twin lightning claws",
    profiles: [
      {
        profile: null,
        rules: ["TWIN-LINKED"],
        range: "melee",
        attacks: 2, //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
    ],
  },
  wolf_claws: {
    id: "wolf_claws",
    name: "Twin lightning claws",
    profiles: [
      {
        profile: null,
        rules: ["TWIN-LINKED"],
        range: "melee",
        attacks: "8", //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
    ],
  },
  claw_of_the_Jackalwolf: {
    id: "claw_of_the_Jackalwolf",
    name: "Claw of the Jackalwolf",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 6, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
    ],
  },
  glacius: {
    id: "glacius",
    name: "Glacius",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 6, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    ],
  },
  wyrmclaw: {
    id: "wyrmclaw",
    name: "Wyrmclaw",
    profiles: [
      {
        profile: null,
        rules: ["LETHAL HITS"],
        range: "melee",
        attacks: 6, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "7",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    ],
  },
  frostfang: {
    id: "frostfang",
    name: "Frostfang",
    profiles: [
      {
        profile: null,
        rules: ["SUSTAINED HITS 1"],
        range: "melee",
        attacks: "8", //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "3", //always positive
        damage: "2", // always string type
      },
    ],
  },
  artificer_crozius: {
    id: "artificer_crozius",
    name: "Artificer crozius",
    profiles: [
      {
        profile: null,
        rules: [],
        range: "melee",
        attacks: 5, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    ],
  },
  trueclaw: {
    id: "trueclaw",
    name: "Trueclaw",
    profiles: [
      {
        profile: null,
        rules: ["LETHAL HITS"],
        range: "melee",
        attacks: 6, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "12",
        armour_penetration: "2", //always positive
        damage: "3", // always string type
      },
    ],
  },
  Murderclaws: {
    id: "Murderclaws",
    name: "Murderclaws",
    profiles: [
      {
        profile: null,
        rules: ["TWIN-LINKED"],
        range: "melee",
        attacks: "8", //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "14",
        armour_penetration: "2", //always positive
        damage: "3", // always string type
      },
    ],
  },
  Staff_of_the_Stormcaller: {
    id: "Staff_of_the_Stormcaller",
    name: "Murderclaws",
    profiles: [
      {
        profile: null,
        rules: ["PSYCHIC", "SUSTAINED HITS 2"],
        range: "melee",
        attacks: 4, //add to models attack value
        weapons_skill: 0, //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "7",
        armour_penetration: "1", //always positive
        damage: "D3", // always string type
      },
    ],
  },
};
/**

id:"/",weapon_name: {
      id:" weapon_name",
      name: "Weapon Name",
      profiles: [
        {
          id:"profile_name1",
          profile: "profile name 1",
          rules: ["ANTI-MONSTER 2+", "ASSAULT"],
          range: 6,
          attacks: 1, //add to models attack value
          weapons_skill: 0,//how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
          strength:"8",
          armour_penetration: "2",//always positive
          damage: "3", // always string type
        },
        profile_name2: {
          id:"profile_name2",
          profile: "profile name 2",
          rules: ["anti-monster 2+"],
          range: "melee",
          attacks: 5, //add to models attack value
          weapons_skill: 0,//how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
          strength:"8",
          armour_penetration: "2",//always positive
          damage: "3", // always string type
        },
      ]
    },
  },
 */
/*



/**





 */
