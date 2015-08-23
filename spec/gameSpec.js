describe("Game", function() {

  var game;
  var rollMany;
  var rollSpare;
  var rollStrike;

  beforeEach(function() {
    game = new Game();
  });


  rollMany = function(rolls, pins) {
    var i;
    for (i = 0; i < rolls; i++) {
          game.roll(pins);
        }
  };


  rollSpare = function() {
    game.roll(5);
    game.roll(5);
  };

  rollStrike = function() {
    game.roll(10);
  };

  describe("Bowling Game Kata", function() {
    
    describe("Gutter game", function() {
      it("should score zero given all rolls hit no pins", function() {
        rollMany(20, 0)
        expect(game.score()).toEqual(0);
      });
    });

    describe("When all rolls hit only 1 pin", function() {
      it("should score 20 given all rolls hit 1 pin", function() {
        rollMany(20, 1);
        expect(game.score()).toEqual(20);
      });
    });

    describe("Game with one spare", function() {
      it("should score 20 given the first 3 rolls hit 5 pins", function() {
        rollSpare();
        game.roll(5);
        expect(game.score()).toEqual(20);
      });
    });

    describe("Game with one strike", function() {
      it("should score 26 given 1 strike followed by 2 rolls hitting 5 & 3", function() {
        rollStrike();
        game.roll(5);
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toEqual(26);
      });
    });

    describe("Perfect game", function() {
      it("should score 300", function() {
        rollMany(12, 10);
        expect(game.score()).toEqual(300);
      });
    });

     describe("Entire sample game", function() {
      it("should score it correctly!", function() {
        // 1st Frame
        game.roll(4);
        game.roll(4);
        // 2nd Frame
        game.roll(3);
        game.roll(2);
        // 3rd Frame
        game.roll(7);
        game.roll(0);
        // 4th Frame
        game.roll(10);
        // 5th Frame
        game.roll(4);
        game.roll(4);
        // 6th Frame
        game.roll(4);
        game.roll(4);
        // 7th Frame
        game.roll(5);
        game.roll(2);
        // 8th Frame
        game.roll(7);
        game.roll(2);
        // 9th Frame
        game.roll(0);
        game.roll(10);
        // 10th Frame
        game.roll(6);
        game.roll(4);
        game.roll(6);

        expect(game.score()).toEqual(98);
      });
    });

  });


  // describe("single throws", function() {
  //   it("records a gutter ball as 0", function() {
  //     game.rollBall(0);
  //     expect(game.results[0]).toEqual(0);
  //   });

  //   it("record a 5 as 5", function() {
  //     game.rollBall(5);
  //     expect(game.results[0]).toEqual(5);
  //   });

  //   it("records a strike ball as 10", function() {
  //     game.rollBall(10);
  //     expect(game.results[0]).toEqual(10);
  //   });

  // });

  // // may not required as can count positions of array to determine.
  // describe("roll counter", function() {
  //   it("a roll adds 1 to the roll counter", function() {
  //     game.rollBall(0);
  //     expect(game.rolls).toEqual(1);
  //   });
  // });

  // describe("goes through the frames as throws are made", function () {
  //   it("states current frame correctly after 2 rolls", function() {
  //     game.rollBall(0);
  //     game.rollBall(0);
  //     expect(game.currentFrameNumber).toEqual(2);
  //   });
  // });

  // describe("stores rolls in results", function () {
  //   it("stores the first 2 rolls in the first frame", function() {
  //     game.rollBall(0);
  //     game.rollBall(0);
  //     expect(game.results[0]).toEqual([0,0]);
  //   });
  // });


  // describe("whole game sample throws", function() {
  //   it("records a game of 20 gutter balls", function() {
  //     game.rollMultipleBalls(20, 0);
  //     expect(game.totalScore).toEqual(0);
  //   });

  // });


  // //basic implementation to begin
  // describe("frame counter", function() {
  //   it("moves to the next frame after 2 rolls", function() {
  //     game.rollBall(0);
  //     game.rollBall(0);
  //     expect(game.frameNumber).toEqual(2);
  //   });
  // });

});




  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);

  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
