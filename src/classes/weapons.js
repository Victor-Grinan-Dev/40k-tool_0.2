export class weapon {
  profiles = {
    standard: {
      mode: "standard",
      type: "", //string melee or ranged
      range: 0,
      attacks: 0,
      toHit: 0,
      strength: 0,
      armorPen: 0,
      damage: 0,
    },
  };

  constructor(name, profiles) {
    this.name = name;
    this.profiles = profiles;
  }
}
