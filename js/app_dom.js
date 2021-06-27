const messageEl = document.getElementById('message'),
    guessesEl = document.getElementById('prevGuesses'),
    guessBtn = document.getElementById('guessButton'),
    resetBtn = document.getElementById('resetButton'),
    guessInput = document.getElementById('guessInput'),
    submit = document.getElementById("submitButton"),
    biggestNumInput = document.getElementById("biggest"),
    smallestNumInput = document.getElementById("smallest"),
    rangeSetter = document.getElementById("rangeSetter"),
    guesser = document.getElementById("guesser"),
    prevGuessList = document.getElementById("prevGuessList"),
    prevGuessHeader = document.getElementById("prevGuessHeader"),
    prevGuessDisplay = document.getElementById("prevGuessDisplay")

let newListElement = (liContent)=>{
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(liContent));
    prevGuessList.appendChild(li);
}
guesser.style.display = "none"
class GuessingGame{
    constructor () {
        this.title ='Guess the Number!',
        this.biggestNum = null,
        this.smallestNum= null,
        this.prevGuesses = [],
        this.secretNum = null
    }
    reset(){
        this.smallestNum = null
        this.biggestNum =  null
        this.prevGuesses = []
        prevGuessDisplay.style.display = "none"
        prevGuessList.innerHTML = ''
    }
    setRandomNum(){
            [this.smallestNum, this.biggestNum]= [smallestNumInput.value, biggestNumInput.value].map(num=>parseInt(num))
            console.log(this.smallestNum,this.biggestNum)
            rangeSetter.style.display="none"
            this.secretNum = Math.floor(Math.random() * 
            (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
            messageEl.innerHTML = `Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`
            guesser.style.display = "block"
    }
    checkGuess(currentGuess){
        return Number.isInteger(currentGuess)?
        currentGuess>=this.smallestNum && currentGuess<=this.biggestNum
        :false
    }
    play() {
            // this.secretNum = 42
            let guess = parseInt(guessInput.value)
            if(this.checkGuess(guess)){
                this.prevGuesses.push(guess)
                this.render(guess)
            }else{
                messageEl.innerHTML = `${guessInput.value} is not valid. You need to guess between ${this.smallestNum} and ${this.biggestNum}`
            }
            // }
            return
    }
    render(presentGuess){
        if(presentGuess==this.secretNum){
            messageEl.innerHTML = `Congrats! You guessed the number in ${this.prevGuesses.length}!`
        }else{
            presentGuess>this.secretNum?this.biggestNum=presentGuess:this.smallestNum=presentGuess
            messageEl.innerHTML = `Your guess is too ${presentGuess>this.secretNum?"high":"low"}`
            prevGuessDisplay.style.display = "block"
            prevGuessHeader.innerHTML = 'Previous guesses:' 
            newListElement(this.prevGuesses[this.prevGuesses.length-1])
            guessInput.innerHTML = ''
        }
    }
}

let game = new GuessingGame()
submit.onclick = ()=>game.setRandomNum()
biggestNumInput.onkeyup = (e)=>{
    if(e.keyCode ===13) {
        if(smallestNumInput.value != ''){
            game.setRandomNum()
        }
        
    }
}
smallestNumInput.onkeyup = (e)=>{
    if(e.keyCode ===13) {
        if(biggestNumInput.value != ''){
            game.setRandomNum()
        }
        
    }
}
guessBtn.onclick = ()=>game.play()
guessInput.onkeyup = (e)=>{if(e.keyCode ===13) game.play()}
resetBtn.onclick = ()=>{
    messageEl.innerHTML = 'Please pick a two numbers to guess between'
    game.reset()
    guesser.style.display = "none"
    rangeSetter.style.display="block"
}