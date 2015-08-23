function Game() {
	this.results = [];
	this.pins = 10;
	this.rolls = 0;
	this.currentFrameNumber = 1;
	this.totalScore = 0;
}

Game.prototype.rollBall = function(pinsKnockedDown) {
	this.results[this.rolls] = pinsKnockedDown;
	this.rollCounterPlusOne();

};


Game.prototype.rollCounterPlusOne = function() {
	return this.rolls += 1
};

//very basic initial implementation.
// Game.prototype.nextFrame = function() {
// 	if (this.rolls % 2 === 0) {
// 		return (this.frameNumber) += 1;
// 	}
// };

 //helper method for multiple rolls to play entire game.
Game.prototype.rollMultipleBalls = function(numberOfBalls, pinsKnockedDown) {
    var i = 0;
      for (i; i < numberOfBalls; i += 1) {
        this.rollBall(pinsKnockedDown);
    }
  };








 





