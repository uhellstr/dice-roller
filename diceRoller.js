  /**
  * This function, rollDice, simulates the rolling of dice based on input in the format commonly used in
  * tabletop role-playing games like Dungeons & Dragons.
  * 
  * The function accepts a string input representing various dice rolls, such as "2d6+3" or "1d20-2".
  * 
  * - It supports multiple dice types: d4, d6, d8, d10, d12, d20, and d100.
  * - The input can specify multiple dice rolls and modifiers, e.g., "3d4+2d6+5".
  * - The function uses regular expressions to parse the input and extract the number of dice, type of dice, and any modifiers.
  * - It then calculates the total roll by summing the results of individual dice rolls and applying any modifiers.
  * - The result is returned as the total value of the dice rolls including modifiers.
  * 
  * Example usage:
  * - rollDice("2d6") // Rolls two six-sided dice and returns their sum.
  * - rollDice("3d4+1") // Rolls three four-sided dice, sums the results, and adds 1.
  * - rollDice("1d6+1d4+2") // Rolls 1d6 and 1d4, sums the result and then add 2 to the sum.
 */
function rollDice(input) {
  let total = 0;

  const diceTypes = {
    4: { min: 1, max: 4 },
    6: { min: 1, max: 6 },
    8: { min: 1, max: 8 },
    10: { min: 1, max: 10 },
    12: { min: 1, max: 12 },
    20: { min: 1, max: 20 },
    100: { min: 1, max: 100 }
  };

  const matches = input.match(/(\d*)[dD](\d+)([+-]?\d*)/g);

  matches.forEach(match => {
    const [_, numStr, type, modifierStr] = match.match(/(\d*)[dD](\d+)([+-]?\d*)/);
    const num = parseInt(numStr) || 1;
    const typeNum = parseInt(type);
    const modifier = parseInt(modifierStr) || 0;

    if (diceTypes[typeNum]) {
      for (let i = 0; i < num; i++) {
        total += Math.floor(Math.random() * (diceTypes[typeNum].max - diceTypes[typeNum].min + 1)) + diceTypes[typeNum].min;
      }
    }
    total += modifier;
  });

  return total;
}

module.exports = rollDice;
