const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    prevGuesses: [],
    secretNum: null,
    getGuess: function(){
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`)
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    }
  }

  console.log(game.getGuess())