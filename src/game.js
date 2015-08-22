function Game() {
	this.pins = 10;
	this.rolls = 0;
	this.fframe = 1;
}

Game.prototype.rollBall = function(pinsKnockedDown) {
	this.rollCounterPlusOne();
	return (this.pins) -= (pinsKnockedDown);
};

Game.prototype.rollCounterPlusOne = function() {
	return (this.rolls) += 1;
};








