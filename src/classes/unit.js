export class Unit {
  name = "";
  stats = {
    movement: 6,
    toughness: 4,
    armor_save: 2,
    wounds: 5,
    leadership: 6,
    objective_control: 1,
  };
  point_cost = [
    {
      models: 5,
      cost: 100,
    },
    {
      models: 10,
      cost: 200,
    },
    {
      models: 15,
      cost: 300,
    },
  ];

  abilities = {
    core: "",
    faction: "",
    other: [
      {
        title: "",
        rule: ``,
      },
      {
        title: "",
        rule: ``,
      },
    ],
  };

  invulnerable = null;
  unit_composition = [];
  equiped = [];
  wargear_options = "";
  leader = [];
  wargear_hability = "";
  specific = "";
  attached_unit = "";

  keywords = [];
  faction_keywords = ["Adeptus Astartes", "Space Wolves"];

  lore = ``;
  constructor(name) {
    this.name = name;
  }
}
