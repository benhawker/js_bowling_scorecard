function Game() {
	this.pins = 10;
	this.rolls = 0;
	this.fframe = 1;
}

Game.prototype.rollBall = function(pinsKnockedDown) {
	this.rollCounterPlusOne();
	this.nextFrame();
	return (this.pins) -= (pinsKnockedDown);
};

Game.prototype.rollCounterPlusOne = function() {
	return (this.rolls) += 1;
};

//very basic initial implementation.
Game.prototype.nextFrame = function() {
	if (this.rolls % 2 === 0) {
		return (this.fframe) += 1;
	}
};








