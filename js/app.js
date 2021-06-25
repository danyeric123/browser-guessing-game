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
          //console.log(Number.isInteger(parseInt(guess)))
          guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`)
        }
        return guess
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      // this.secretNum = 42
      let guess = null
      while(guess!=this.secretNum){
        // console.log(this.prevGuesses)
        guess=this.getGuess()
        this.prevGuesses.push(guess)
        this.render(guess)
      }
      return
    },
    render: function(presentGuess){
      if(presentGuess==this.secretNum){
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length}!`)
      }else{
        alert(`Your guess is too ${presentGuess>this.secretNum?"high":"low"} 
        Previous guesses: ${this.prevGuesses.join(", ")}`)
      }
    }
  }

  game.play()