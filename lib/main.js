/**
* Rolls a ten-sided dice in the pool
* @return {number} the dice roll
*/
function rollDie () {
  return Math.ceil(Math.random() * 10)
}

/**
* Creates a pool object with dices, weak, and rerollOn variables
*/
Pool = function(){
  this.dices = 0
  this.weak = false
  this.rerollOn = 10

  if (typeof arguments[0] === "number") {
    this.dices = parseInt(arguments[0], 10)
  }
  if (typeof arguments[0] === "object") {
    var config = arguments[0]

    this.dices    = config.dices || this.dices
    this.weak     = config.weak || this.weak
    this.rerollOn = config.rerollOn || this.rerollOn
  }
};

/**
* Adds dices to the pool
* @param {number} dices the number of dices to be added
* @return {object} the new amount of dices
*/
Pool.prototype.addDice = function (dices) {
  this.dices = this.dices + parseInt(dices, 10)

  return this;
};

/**
* Remove dices from the pool
* @param {number} dices the number of dices to be added
* @return {object} the new amount of dices
*/
Pool.prototype.removeDice = function (dices) {
  this.dices = this.dices - parseInt(dices, 10)

  return this;
};
Pool.prototype.penalty = function (penalty) {
  return this.removeDice(penalty)
};

/**
* Changes the character rolls to be weak
* @return {boolean} true
*/
Pool.prototype.isWeak = function () {
  this.weak = true

  return this;
};

/**
* Changes the rerollOn value
* @param {number} threshold the number to change the reroll number to
* @return {object} the new reroll number
*/
Pool.prototype.reroll = function (threshold) {
  this.rerollOn = parseInt(threshold, 10)

  return this;
};

/**
* Checks to see if the roll will be a chance roll, which is when the character has no skills of modifiers in the particular area 
* @return {boolean} true if the number of dices is less than 1, false otherwise
*/
Pool.prototype.isChanceRoll = function () {
  return (this.dices < 1)
}

/**
* Rolls all of the dices in the pool
* @return {number} the number of sucessfull rolls 
*/
Pool.prototype.roll = function () {
  var successes = 0,
      roll;

  if (this.isChanceRoll()) {
    while (true) {
      roll = rollDie()

      if (roll === 10) {
        successes++
      } else if(roll === 1) {
        successes--
      }
      if (this.weak || roll < 10) {
        break
      }
    }
  } else {
    // Rolls every dice in the pool 
    for (var i = 0; i < this.dices; i++) {
      roll = rollDie()

      if (roll >= 8) {
        successes++
      }
        
      // Adds one more dice in the pool for another chance of a successful roll
      if (!this.weak && roll >= this.rerollOn) {
        this.dices++
      }
      if (this.weak && roll === 1) {
        successes--
      }
    }
  }

  return (this.isChanceRoll()) ? successes : Math.max(0, successes);
};

exports.Pool = Pool;
