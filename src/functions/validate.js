/**
 * returns true if hero was already included in the army
 * @param {*} unit = object to check if has been included
 * @param {*} unitArray = all units already included in the army
 */
export const checkIfEpicHeroIncluded = (unit, unitArray) => {
  unitArray.forEach((unitElement) => {
    if (unitElement.keywords.includes("Epic Hero")) {
      return unitElement.name === unit.name;
    }
  });
};
