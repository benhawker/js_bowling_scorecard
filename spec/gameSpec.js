describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });


  describe("single throws", function() {
    it("records a gutter ball as 0", function() {
      game.rollBall(0);
      expect(game.results[0]).toEqual(0);
    });

    it("record a 5 as 5", function() {
      game.rollBall(5);
      expect(game.results[0]).toEqual(5);
    });

    it("records a strike ball as 10", function() {
      game.rollBall(10);
      expect(game.results[0]).toEqual(10);
    });

  });

  // may not required as can count positions of array to determine.
  describe("roll counter", function() {
    it("a roll adds 1 to the roll counter", function() {
      game.rollBall(0);
      expect(game.rolls).toEqual(1);
    });
  });


  describe("whole game sample throws", function() {
    it("records a game of 20 gutter balls", function() {
      game.rollMultipleBalls(20, 0);
      expect(game.finalScore).toEqual(0);
    });

  });


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
