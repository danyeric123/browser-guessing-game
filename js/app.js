const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    prevGuesses: [],
    secretNum: null,
    getGuess: function(){
        let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`)
        while(Number.isInteger(parseInt(guess))?
              parseInt(guess)<this.smallestNum||parseInt(guess)>this.biggestNum
              :true){
          console.log(Number.isInteger(parseInt(guess)))
          guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`)
        }
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    }
  }

  game.getGuess()