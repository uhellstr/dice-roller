// diceRoller.js
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
