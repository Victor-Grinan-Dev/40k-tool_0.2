export const testData = [
  {
    id: "",
    name: "Blood Claws",
    nickname: "",
    image: "bloodClaws",
    point_cost: [
      {
        amount: 10,
        cost: 140,
      },
      {
        amount: 15,
        cost: 210,
      },
    ],
    stats: {
      movement: 6,
      toughness: 4,
      armor_save: 3,
      wounds: 2,
      leadership: 6,
      objective_control: 2,
      weapon_skill: 3,
      balistic_skill: 3,
      attacks: 2,
    },

    abilities: {
      core: [],
      faction: "Oath of Moment",
      other: [
        {
          title: "Berserk Charge",
          rule: `Each time this unit makes a Charge move,
          until the end of the turn, add 1 to the Attacks and Strength
          characteristics of melee weapons equipped by models in
          this unit`,
        },
      ],
    },

    transport: ``,
    invulnerable: null,
    unit_composition: ["1 Blood Claw Pack Leader", "9-14 Blood Claws"],
    equiped: [
      { name: "bolt_pistol", amount: 9 },
      { name: "astartes_chainsword", amount: 7 },
      { name: "power_weapon", amount: 1 },
      { name: "plasma_pistol", amount: 1 },
      { name: "plasma_gun", amount: 2 },
    ],
    wargear_options: [
      {
        title:
          "The Blood Claw Pack Leader’s astartes_chainsword can be replaced with one of the following",
        options: ["1 power_weapon", "1 power_fist"],
        rule: {
          inPlaceOf: "astartes_chainsword",
          replaceWith: "",
          add: "",
        },
      },
      {
        title: "The Blood Claw Pack Leader’s bolt_pistol can be replaced with",
        options: ["1 plasma_pistol"],
        rule: {
          inPlaceOf: "bolt_pistol",
          replaceWith: "",
          add: "",
        },
      },
      {
        title:
          "Up to 2 Blood Claws can each have their astartes_chainsword replaced with one of the following",
        options: [
          "1 flamer and 1 close combat weapon",
          "1 grav_gun and 1 close combat weapon",
          "1 meltagun and 1 close combat weapon",
          "1 plasma_gun and 1 close combat weapon",
        ],
        rule: {
          inPlaceOf: "astartes_chainsword",
          replaceWith: "",
          add: "",
        },
      },
    ],
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: null,
    specific: null,
    attached_unit: `If a Character unit from your army with the Leader ability
    can be attached to an Assault Squad, it can instead be
    attached to this unit.`,

    keywords: ["Infantry", "Battleline", "Grenades", "Imperium", "Blood Claws"],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Young and fiery warriors full of belligerent enthusiasm, Blood
    Claws hunger to prove themselves in savage battle. With relentless
    exuberance they plunge headlong into the foe, straddling the line
    between sheer heroism and recklessness. Many great sagas start
    with the Blood Claws’ glory hunts`,
  },
  {
    id: "",
    name: "Grey Hunters",
    nickname: "",
    image: "greyHunters",
    point_cost: [
      {
        amount: 5,
        cost: 90,
      },
      {
        amount: 10,
        cost: 180,
      },
    ],
    stats: {
      movement: 6,
      toughness: 4,
      armor_save: 3,
      wounds: 2,
      leadership: 6,
      objective_control: 2,
      weapon_skill: 3,
      balistic_skill: 3,
      attacks: 2,
    },

    abilities: {
      core: [],
      faction: "Oath of Moment",
      other: [
        {
          title: "Cunning Hunters",
          rule: `This unit is eligible to shoot in a turn in
          which it Fell Back or Advanced`,
        },
      ],
    },

    transport: ``,
    invulnerable: null,
    unit_composition: ["1 Grey Hunter Pack Leader", "4-9 Grey Hunters"],
    equiped: [
      { name: "bolt_pistol", amount: 5 },
      { name: "boltgun", amount: 5 },
      { name: "combat_weapon", amount: 5 },
    ],
    wargear_options: [
      {
        title: "Any number of models can each be equipped with",
        options: ["1 astartes_chainsword"],
      },
      {
        title:
          "The Grey Hunter Pack Leader’s close combat weapon can be replaced with one of the following",
        options: ["1 power_fist", "1 power_weapon"],
      },
      {
        title:
          "Up to 2 Grey Hunters can each have their boltgun replaced with one of the following",
        options: ["1 flamer", "1 grav_gun", "1 meltagun", "1 plasma_gun"],
      },
    ],
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: null,
    specific: null,
    attached_unit: `If a Character unit from your army with the Leader ability
    can be attached to a Tactical Squad, it can instead be
    attached to this unit`,

    keywords: [
      "Infantry",
      "Battleline",
      "Grenades",
      "Imperium",
      "Grey Hunters",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `With their instinctive raw aggression tempered – but never quashed
    – by countless battlefield victories, Grey Hunters are patient, cunning
    and adaptable. Some packs take and hold ground, unleashing volleys
    of disciplined firepower, while others stalk the flanks. When the trap is
    set, Grey Hunters leap in for the kill`,
  },
  {
    id: "",
    name: "Long Fangs",
    nickname: "",
    image: "longFangs",
    point_cost: [
      {
        amount: 5,
        cost: 150,
      },
      {
        amount: 6,
        cost: 180,
      },
    ],
    stats: {
      movement: 6,
      toughness: 4,
      armor_save: 3,
      wounds: 2,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 3,
      balistic_skill: 3,
      attacks: 2,
    },

    abilities: {
      core: [],
      faction: "Oath of Moment",
      other: [
        {
          title: "Fire Discipline",
          rule: `Each time this unit Remains Stationary, if it
          includes a Long Fang Pack Leader, you can select one enemy
          unit that is visible to that model. Until the end of the turn, each
          time a model in this unit makes a ranged attack that targets
          that enemy unit, re-roll a Hit roll of 1`,
        },
        {
          title: "Armorium Cherub",
          rule: `Once per battle, after making a Hit roll
          for a model in this unit, you can change that roll to an
          unmodified 6`,
        },
      ],
    },

    transport: ``,
    invulnerable: null,
    unit_composition: ["1 Long Fang Pack Leader", "4-5 Long Fangs"],
    equiped: [
      { name: "boltgun", amount: 5 },
      { name: "bolt_pistol", amount: 5 },
      { name: "close_combat_weapon", amount: 5 },
    ],
    wargear_options: [
      {
        title:
          "Any number of Long Fangs can each have their boltgun replaced with one of the following",
        options: [
          "1 grav_cannon",
          "1 heavy_bolter",
          "1 heavy_flamer*",
          "1 lascannon",
          "1 missile_launcher",
          "1 multi_melta",
          "1 plasma_cannon",
        ],
      },
      {
        title:
          "The Long Fang Pack Leader’s close combat weapon can be replaced with one of the following",
        options: ["1 astartes_chainsword", "1 power_fist", "1 power_weapon"],
      },
      {
        title:
          "The Long Fang Pack Leader’s boltgun can be replace with one of the following",
        options: [
          "1 grav_gun",
          "1 flamer",
          "1 meltagun",
          "1 plasma_gun",
          "1 plasma_pistol",
        ],
      },
    ],
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: {},
    specific: null,
    attached_unit: `If a Character unit from your army with the Leader ability
    can be attached to a Devastator Squad, it can instead be
    attached to this unit`,

    keywords: ["Infantry", "Grenades", "Imperium", "Long Fangs"],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Dour and grizzled veterans, Long Fangs are steady of hand and
    temperament, hoary with wisdom and literally long of fang. To these
    patient warriors are granted some of the Great Company’s most
    devastating ranged weapons. Keen of eye, Long Fangs hunt the
    monstrous beasts and battle tanks of the foe`,
  },

  {
    id: "",
    name: "Venerable Dreadnought",
    nickname: "",
    image: "vendread",
    point_cost: [
      {
        amount: 1,
        cost: 170,
      },
    ],
    stats: {
      movement: 6,
      toughness: 9,
      armor_save: 2,
      wounds: 8,
      leadership: 6,
      objective_control: 3,
      weapon_skill: 3,
      balistic_skill: 3,
      attacks: 0,
    },

    abilities: {
      core: ["Deadly Demise 1"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Wisdom of the Ancients (Aura)",
          rule: `While a friendly Adeptus
          Astartes Infantry unit is within 6" of this model, each time
          a model in that unit makes an attack, re-roll a Hit roll of 1 and
          re-roll a Wound roll of 1`,
        },
      ],
    },

    transport: ``,
    invulnerable: null,
    unit_composition: ["1 Space Wolves Venerable Dreadnought"],
    equiped: [
      { name: "assault_cannon", amount: 1 },
      { name: "storm_bolter", amount: 1 },
      { name: "dreadnought_combat_weapon", amount: 1 },
    ],
    wargear_options: [
      {
        title:
          "This model’s assault cannon can be replaced with one of the following",
        options: [
          "1 helfrost cannon",
          "1 multi-melta",
          "1 plasma cannon",
          "1 twin lascannon",
        ],
      },
      {
        title:
          "This model’s Dreadnought combat weapon and storm bolter can be replaced with one of the following",
        options: [
          "1 missile launcher and 1 close combat weapon",
          "1 Dreadnought combat weapon and 1 heavy flamer",
        ],
      },
      {
        title:
          "This model’s assault cannon, storm bolter and Dreadnought combat weapon can be replaced with one of the followin",
        options: [
          "1 Fenrisian great axe, 1 blizzard shield and 1 storm bolter",
          "1 Fenrisian great axe, 1 blizzard shield and 1 heavy flamer",
        ],
      },
    ],
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: {
      title: "Blizzard Shield",
      transport: ``,
      rule: `The bearer has a 4+ 
      invulnerable save`,
    },
    specific: null,
    attached_unit: "",

    keywords: [
      "Vehicle",
      "Walker Smoke",
      "Imperium",
      "Dreadnought",
      "Venerable Dreadnought",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Venerable Dreadnoughts are priceless relics steeped in centuries of
    battle. The ancient warriors at the heart of each are living legends of
    the Space Wolves, with wisdom as deep as the ocean and intuition as
    sharp as krakens’ teeth. Awoken from dormancy, they fight as lords of
    id:"",battle, seemingly stepping from the sagas to kill in the 
    name of Russ`,
  },
  {
    id: "",
    name: "Wolf Guard Battle Leader in Terminator Armour",
    nickname: "",
    image: "wolfguard__terminator_hammer",
    point_cost: [
      {
        amount: 1,
        cost: 80,
      },
    ],
    stats: {
      movement: 5,
      toughness: 5,
      armor_save: 2,
      wounds: 5,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 2,
      balistic_skill: 2,
      attacks: 0,
    },

    abilities: {
      core: ["Deep Strike", "Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Tactical Precision",
          rule: `While this model is leading a unit,
          weapons equipped by models in that unit with have the
          [LETHAL HITS] ability`,
        },
        {
          title: "Huskarl to the Jarl",
          rule: `While this model is attached to a unit that
          contains another Character model, all Character models in
          that unit have the Feel No Pain 4+ ability`,
        },
      ],
    },

    transport: ``,
    invulnerable: 4,
    unit_composition: ["1 Wolf Guard Battle Leader in Terminator Armour"],
    equiped: [
      { name: "storm_bolter", amount: 1 },
      { name: "power_weapon", amount: 1 },
    ],
    wargear_options: [
      {
        title: `This model’s power_weapon can be replaced with one of the following`,
        options: [
          "1 chainfist",
          "1 power_fist",
          "1 relic shield and 1 close combat weapon",
          "1 thunder_hammer",
        ],
      },
      {
        title: `This model’s storm_bolter can be replaced with one of the following`,
        options: [
          "1 chainfist",
          "1 power_fist",
          "1 relic shield and 1 close combat weapon",
          "1 thunder_hammer",
        ],
      },
      {
        title: `This model’s storm_bolter and power_weapon can be replaced with`,
        options: ["1 twin_lightning_claws"],
      },
    ],
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: {
      title: "Storm_Shield",
      rule: "The bearer has a Wounds characteristic of 4",
    },
    specific: null,
    attached_unit: `If a Character unit from your army with the Leader ability
    can be attached to a Terminator Squad, it can instead be
    attached to this unit`,

    keywords: [
      "Infantry",
      "Character",
      "Imperium",
      "Terminator",
      "Wolf Guard Battle Leader in Terminator Armour",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Wolf Guard bedeck their Terminator armour with totems, trophies and
    marks of honour gained over their years of battle. They fight at the
    spearhead of assaults, eagerly seeking glory as enemy fire deflects
    harmlessly from their relic armour, the earth shaking beneath their
    heavy tread as they slay with stunning skill`,
  },
  {
    id: "",
    name: "Wolf Guard Pack Leader",
    nickname: "",
    image: "wolfguard",
    point_cost: [
      {
        amount: 1,
        cost: 30,
      },
    ],
    stats: {
      movement: 6,
      toughness: 4,
      armor_save: 3,
      wounds: 2,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 3,
      balistic_skill: 3,
      attacks: 0,
    },

    abilities: {
      core: ["Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Inspiring Leader:",
          rule: `While this model is leading a unit, once per
          battle, when a Battle-shock test is taken for that unit, you can
          re-roll that test`,
        },
        {
          title: "Pack Leader",
          rule: `This model cannot be your Warlord and cannot
          be given Enhancements`,
        },
      ],
    },

    transport: ``,
    invulnerable: null,
    unit_composition: ["1 Wolf Guard Pack Leader"],
    equiped: [
      { name: "bolt_pistol", amount: 1 },
      { name: "boltgun", amount: 1 },
      { name: "close combat weapon", amount: 1 },
    ],
    wargear_options: [
      {
        title: `This model’s bolt_pistol and boltgun can be replaced with two different weapons from the following
      list*`,
        options: [
          "1 bolt_pistol",
          "1 boltgun",
          "1 combi_weapon",
          "1 plasma_pistol",
          "1 storm_bolter",
          "1 astartes_chainsword",
          "1 power_fist",
          "1 power_weapon",
          "1 thunder_hammer",
          "1 storm_shield",
        ],
      },
      {
        title: "This model’s bolt_pistol and boltgun can be replaced with",
        options: ["1 twin_lightning_claws"],
      },
    ],
    leader: ["Blood Claws", "Grey Hunters", "Long Fangs"],
    second_leader: false,
    third_leader: `You must attach this model to one of the above units, and can
    do so even if one or more Character units have already been
    attached to that unit, but a unit can never include more than
    one Pack Leader model. If you do, and that Bodyguard unit
    is destroyed, the Leader units attached to it become separate
    units, with their original Starting Strengths. If it is not possible
    to attach this model to a unit, it does not take part in the
    battle and counts as having been destroyed`,
    wargear_hability: {
      title: "Storm_Shield",
      rule: "The bearer has a 4+ invulnerable save",
    },
    specific: null,
    attached_unit: "",

    keywords: [
      "Infantry",
      "Character",
      "Grenades",
      "Imperium",
      "Pack Leader",
      "Wolf Guard Pack Leader",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Wolf Guard of proven leadership ability and bellicose charisma may be
    assigned to lead packs of battle-brothers. These warriors’ extensive
    battlefield wisdom and saga-worthy combat prowess are inspirational
    to the Space Wolves under their charge, and fighting alongside them is
    seen as a great honour`,
  },
  {
    id: "",
    name: "Wolf Guard Pack Leader in Terminator Armour",
    nickname: "",
    image: "wolfguard_terminator_claws",
    point_cost: [
      {
        amount: 1,
        cost: 45,
      },
    ],
    stats: {
      movement: 5,
      toughness: 5,
      armor_save: 2,
      wounds: 3,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 3,
      balistic_skill: 3,
      attacks: 0,
    },

    abilities: {
      core: [],
      faction: "Oath of Moment",
      other: [
        {
          title: "Inspiring Leader",
          rule: `While this model is leading a unit, once per
          battle, when a Battle-shock test is taken for that unit, you can
          re-roll that test.`,
        },
        {
          title: "Pack Leader",
          rule: `This model cannot be your Warlord and cannot
          be given Enhancements`,
        },
      ],
    },

    transport: ``,
    invulnerable: 4,
    unit_composition: ["1 Wolf Guard Pack Leader in Terminator Armour"],
    equiped: [
      { name: "storm_bolter", amount: 1 },
      { name: "power_weapon", amount: 1 },
    ],

    wargear_options: [
      {
        title: `This model’s storm_bolter and power_weapon can be replaced with two different options from the
      following list*`,
        options: [
          "1 assault_cannon",
          "1 heavy_flamer",
          "1 cyclone_missile_launcher and 1 storm_bolter",
          "1 storm_bolter",
          "1 chainfist",
          "1 power_fist",
          "1 thunder_hammer",
          "1 storm_shield",
        ],
      },
      {
        title:
          "This model’s storm_bolter and power_weapon can be replaced with",
        options: ["1 twin_lightning_claws"],
      },
      {
        title: "This model’s storm_bolter can be replaced with",
        options: ["1 combi_weapon"],
      },
    ],
    leader: ["Blood Claws", "Grey Hunters", "Long Fangs"],
    second_leader: false,
    third_leader: `You must attach this model to one of the above units, and can
    do so even if one or more Character units have already been
    attached to that unit, but a unit can never include more than
    one Pack Leader model. If you do, and that Bodyguard unit
    is destroyed, the Leader units attached to it become separate
    units, with their original Starting Strengths. If it is not possible
    to attach this model to a unit, it does not take part in the
    battle and counts as having been destroyed`,
    wargear_hability: {
      title: "Storm_Shield",
      rule: "The bearer has a Wounds characteristic of 4",
    },
    specific: null,
    attached_unit: "",

    keywords: [
      "Infantry",
      "Character",
      "Grenades",
      "Imperium",
      "Terminator",
      "Pack Leader",
      "Wolf Guard Pack Leader in Terminator Armour",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Those Wolf Guard granted the raw power afforded by Terminator
    armour bestride the battlefield as nigh-invulnerable champions.
    Amongst the packs they lead, they serve as indomitable anvils,
    anchoring their battle-brothers’ lines with their intimidating bulk and
    unleashing the power of their ornate weapons to destructive effect`,
  },
];
