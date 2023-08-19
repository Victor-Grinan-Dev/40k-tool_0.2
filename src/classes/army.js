export class Army {
  units = [];
  warlordCount = 0;
  battlelineCount = 0;

  addUnit(unit) {
    if (unit.keywords.includes === "Battleline" && this.battlelineCount < 6) {
      this.units.push(unit);
    } else if (unit.keywords.includes("Epic Hero")) {
    }
  }
}
