function Game() {
// 	// this.results = [];
// 	// this.pins = 10;
// 	// this.rolls = 0;
// 	// this.currentFrameNumber = 1;
// 	// this.totalScore = 0;
	this._score = 0;
	this._rolls = [];
	this._current = 0;
}

var Game;

Game.prototype.roll = function(pins) {
if (typeof pins !== 'number') {
	throw new Error("Expected a number");
}
	this._rolls[this._current++] = pins;
// this._score += pins;
};


Game.prototype.score = function() {
	var score = 0, i, 
			hasBonusRoll = this._hasBonusRoll(),
			scoringRolls = (hasBonusRoll) ? hasBonusRoll + 1 : this._rolls.length;

	for (i = 0; i < scoringRolls; i++) {
		if(this._isStrike(i)) {
			score += 10 + this._rolls[i + 1] + this._rolls[i + 2]; 
		}
		else if(this._isSpare(i)) {
			score += 10 + this._rolls[i + 2];
			i ++;
		} else {
			score += this._rolls[i]
		}
	}
	return score;
};

Game.prototype._isSpare = function(roll) {
	return this._rolls[roll] + this._rolls[roll + 1] === 10;
};

Game.prototype._isStrike = function(roll) {
	return this._rolls[roll] === 10;
};

Game.prototype._hasBonusRoll = function() {
	var tenthFrame = this._rolls.length - 3, hasBonus;

	hasBonus = (this._isStrike(tenthFrame) || this._isSpare(tenthFrame));
	return (hasBonus) ? tenthFrame : null;
};

// Game.prototype._isSpare = function(roll) {
// 	return this._roll(ro)
// };


// // Game.prototype.rollBall = function(pinsKnockedDown) {
// // 	this.results[this.rolls] = pinsKnockedDown;
// // 	this.rollCounterPlusOne();
// // };

// // Game.prototype.rollCounterPlusOne = function() {
// // 	this.rolls += 1;
// // 	this.addToTotal(this.results[this.results.length-1]);

// // 	// if (this.board[this.board.length-1]

// // 	if (this.results[this.results.length-1] === 10) {
// // 		frameCounterPlusOne();
// // 	}

// // 	// else if ((this.result[this.results.length-1])
// // };

// // Game.prototype.frameCounterPlusOne = function() {
// // 	 if (this.rolls % 2 == 0) {
// //     this.currentFrameNumber += 1;
// //   }
// // };

// // Game.prototype.addToTotal = function() {
// // 	this.totalScore += lastRollScore 
// // };

// // // Game.prototype.calculateFrameScore = function() {
// // // 	return this.results
// // // };

// // // Game.prototype.calculateTotalScore = function() {
// // // 	// for (currentFrameNumber = 1: currentFrameNumber < 11; currentFrameNumber += 1) {

// // // 	// }
// // // };

// //             // for (frame = 0; frame < 10; frame += 1) {
// //             //         score += rolls[frameIndex] + rolls[frameIndex + 1];
// //             //         // frameIndex += 2;
// //             //     }

// //             // return score;

// // //very basic initial implementation.
// // // Game.prototype.nextFrame = function() {
// // // 	if (this.rolls % 2 === 0) {
// // // 		return (this.frameNumber) += 1;
// // // 	}
// // // };

// //  //helper method for multiple rolls to play entire game.
// //  //this should be delegated to the spec file.
// // Game.prototype.rollMultipleBalls = function(numberOfBalls, pinsKnockedDown) {
// //     var i = 0;
// //       for (i; i < numberOfBalls; i += 1) {
// //         this.rollBall(pinsKnockedDown);
// //     }
// //   };








 





