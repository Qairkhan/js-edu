/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(preferences, knowsProgramming, config) {
  const hoursToLearnJS = 800;
  const hoursToLearnBaseProg = 500;
  let weeksToLearnJS;
  let hoursToLearnInWeek = config[preferences];  

  if (knowsProgramming) {
    weeksToLearnJS = Math.ceil( hoursToLearnJS / hoursToLearnInWeek );
  } else {
    weeksToLearnJS = Math.ceil( (hoursToLearnJS + hoursToLearnBaseProg) / hoursToLearnInWeek );
  }

  return weeksToLearnJS;
}
  