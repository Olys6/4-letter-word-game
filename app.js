const words = [
    "four", "able", "aged",
    "army", "bank", "band",
    "base", "boat", "king", 
    "acid", "bird", "burn", 
    "camp", "bone", "down", 
    "earn", "gift", "nice",
    "belt" , "case", "cash",
    "chat", "club", "dark", 
    "easy", "late", "fact",
    "fate", "goal", "glad",
    "girl", "grow", "join", 
    "name", "next", "time", 
    "true", "town", "warm",
    "word", "year", "wire"
]

const randomWord = words[Math.floor(Math.random() * words.length)].split("")

// console.log("RANDOM WORD: " + randomWord)

let row1guess = []

function row1Guess() {
    
    if(document.getElementById("row1letter1").value === "" 
    || document.getElementById("row1letter2").value === ""
    || document.getElementById("row1letter3").value === ""
    || document.getElementById("row1letter4").value === ""
    ) {
        window.alert("Please fill the row with a word")
    } else {
        row1guess.push(document.getElementById("row1letter1").value)
        row1guess.push(document.getElementById("row1letter2").value)
        row1guess.push(document.getElementById("row1letter3").value)
        row1guess.push(document.getElementById("row1letter4").value)
        // window.alert(row1guess)

        let row1letter1 = document.getElementById("row1letter1")
        let row1letter2 = document.getElementById("row1letter2")
        let row1letter3 = document.getElementById("row1letter3")
        let row1letter4 = document.getElementById("row1letter4")


        let correctGuessesRow1 = []

        row1guess.filter((letter) => {
            if(randomWord.includes(letter)) {
                correctGuessesRow1.push(letter)
            }
        })

        // console.log("ROW 1 GUESS", row1guess)

        
        for(let i = 0; i < correctGuessesRow1.length; i++) {
            console.log(correctGuessesRow1[i])
            if(correctGuessesRow1[i] === row1guess[0]) {
                row1letter1.style.backgroundColor = "rgb(255, 184, 53)"
                row1letter1.style.transition = "1s"
            } else if(correctGuessesRow1[i] === row1guess[1]) {
                row1letter2.style.backgroundColor = "rgb(255, 184, 53)"
                row1letter2.style.transition = "1s"
            } else if(correctGuessesRow1[i] === row1guess[2]) {
                row1letter3.style.backgroundColor = "rgb(255, 184, 53)"
                row1letter3.style.transition = "1s"
            } else if(correctGuessesRow1[i] === row1guess[3]) {
                row1letter4.style.backgroundColor = "rgb(255, 184, 53)"
                row1letter4.style.transition = "1s"
            }
        }

        if(randomWord[0] === row1guess[0]) {
            row1letter1.style.backgroundColor = "rgb(0, 211, 0)"
            row1letter1.style.transition = "1s"
        } 
        
        if(randomWord[1] === row1guess[1]) {
            row1letter2.style.backgroundColor = "rgb(0, 211, 0)"
            row1letter2.style.transition = "1s"
        } 
        
        if(randomWord[2] === row1guess[2]) {
            row1letter3.style.backgroundColor = "rgb(0, 211, 0)"
            row1letter3.style.transition = "1s"
        }
        
        if(randomWord[3] === row1guess[3]) {
            row1letter4.style.backgroundColor = "rgb(0, 211, 0)"
            row1letter4.style.transition = "1s"
        }

        if(correctGuessesRow1.join("") === randomWord.join("")) {
            setTimeout(() => {window.alert("Congratualions! You found the CORRECT 4 letter word")}, 1600)
            document.getElementById("playAgainBtn").style.display = "block"
        }

        document.getElementById("row1guess").style.display = "none"
        
        document.getElementById("row2guess").style.display = "block"
        // console.log("RANDOM WORD: " + randomWord)

        // console.log("FILTERED: " + correctGuessesRow1)

    }
}

let row2guess = []

function row2Guess() {
    
    if(document.getElementById("row2letter1").value === "" 
    || document.getElementById("row2letter2").value === ""
    || document.getElementById("row2letter3").value === ""
    || document.getElementById("row2letter4").value === ""
    ) {
        window.alert("Please fill the row with a word")
    } else if(row1guess.length === 0) {
        window.alert("Please fill the previous row")
    } else {
        row2guess.push(document.getElementById("row2letter1").value)
        row2guess.push(document.getElementById("row2letter2").value)
        row2guess.push(document.getElementById("row2letter3").value)
        row2guess.push(document.getElementById("row2letter4").value)
        // window.alert(row2guess)

        let row2letter1 = document.getElementById("row2letter1")
        let row2letter2 = document.getElementById("row2letter2")
        let row2letter3 = document.getElementById("row2letter3")
        let row2letter4 = document.getElementById("row2letter4")


        let correctGuessesrow2 = []

        row2guess.filter((letter) => {
            if(randomWord.includes(letter)) {
                correctGuessesrow2.push(letter)
            }
        })

        // console.log("ROW 1 GUESS", row2guess)

        
        for(let i = 0; i < correctGuessesrow2.length; i++) {
            console.log(correctGuessesrow2[i])
            if(correctGuessesrow2[i] === row2guess[0]) {
                row2letter1.style.backgroundColor = "rgb(255, 184, 53)"
                row2letter1.style.transition = "1s"
            } else if(correctGuessesrow2[i] === row2guess[1]) {
                row2letter2.style.backgroundColor = "rgb(255, 184, 53)"
                row2letter2.style.transition = "1s"
            } else if(correctGuessesrow2[i] === row2guess[2]) {
                row2letter3.style.backgroundColor = "rgb(255, 184, 53)"
                row2letter3.style.transition = "1s"
            } else if(correctGuessesrow2[i] === row2guess[3]) {
                row2letter4.style.backgroundColor = "rgb(255, 184, 53)"
                row2letter4.style.transition = "1s"
            }
        }

        if(randomWord[0] === row2guess[0]) {
            row2letter1.style.backgroundColor = "rgb(0, 211, 0)"
            row2letter1.style.transition = "1s"
        } 
        
        if(randomWord[1] === row2guess[1]) {
            row2letter2.style.backgroundColor = "rgb(0, 211, 0)"
            row2letter2.style.transition = "1s"
        } 
        
        if(randomWord[2] === row2guess[2]) {
            row2letter3.style.backgroundColor = "rgb(0, 211, 0)"
            row2letter3.style.transition = "1s"
        }
        
        if(randomWord[3] === row2guess[3]) {
            row2letter4.style.backgroundColor = "rgb(0, 211, 0)"
            row2letter4.style.transition = "1s"
        }

        if(correctGuessesrow2.join("") === randomWord.join("")) {
            setTimeout(() => {window.alert("Congratualions! You found the CORRECT 4 letter word")}, 1600)
            document.getElementById("playAgainBtn").style.display = "block"
        }

        document.getElementById("row2guess").style.display = "none"
        
        document.getElementById("row3guess").style.display = "block"
        // console.log("RANDOM WORD: " + randomWord)

        // console.log("FILTERED: " + correctGuessesrow2)

    }
}

let row3guess = []

function row3Guess() {
    
    if(document.getElementById("row3letter1").value === "" 
    || document.getElementById("row3letter2").value === ""
    || document.getElementById("row3letter3").value === ""
    || document.getElementById("row3letter4").value === ""
    ) {
        window.alert("Please fill the row with a word")
    } else if(row1guess.length === 0) {
        window.alert("Please fill the previous rows")
    } else {
        row3guess.push(document.getElementById("row3letter1").value)
        row3guess.push(document.getElementById("row3letter2").value)
        row3guess.push(document.getElementById("row3letter3").value)
        row3guess.push(document.getElementById("row3letter4").value)
        // window.alert(row3guess)

        let row3letter1 = document.getElementById("row3letter1")
        let row3letter2 = document.getElementById("row3letter2")
        let row3letter3 = document.getElementById("row3letter3")
        let row3letter4 = document.getElementById("row3letter4")


        let correctGuessesrow3 = []

        row3guess.filter((letter) => {
            if(randomWord.includes(letter)) {
                correctGuessesrow3.push(letter)
            }
        })

        // console.log("ROW 1 GUESS", row3guess)

        
        for(let i = 0; i < correctGuessesrow3.length; i++) {
            console.log(correctGuessesrow3[i])
            if(correctGuessesrow3[i] === row3guess[0]) {
                row3letter1.style.backgroundColor = "rgb(255, 184, 53)"
                row3letter1.style.transition = "1s"
            } else if(correctGuessesrow3[i] === row3guess[1]) {
                row3letter2.style.backgroundColor = "rgb(255, 184, 53)"
                row3letter2.style.transition = "1s"
            } else if(correctGuessesrow3[i] === row3guess[2]) {
                row3letter3.style.backgroundColor = "rgb(255, 184, 53)"
                row3letter3.style.transition = "1s"
            } else if(correctGuessesrow3[i] === row3guess[3]) {
                row3letter4.style.backgroundColor = "rgb(255, 184, 53)"
                row3letter4.style.transition = "1s"
            }
        }

        if(randomWord[0] === row3guess[0]) {
            row3letter1.style.backgroundColor = "rgb(0, 211, 0)"
            row3letter1.style.transition = "1s"
        } 
        
        if(randomWord[1] === row3guess[1]) {
            row3letter2.style.backgroundColor = "rgb(0, 211, 0)"
            row3letter2.style.transition = "1s"
        } 
        
        if(randomWord[2] === row3guess[2]) {
            row3letter3.style.backgroundColor = "rgb(0, 211, 0)"
            row3letter3.style.transition = "1s"
        }
        
        if(randomWord[3] === row3guess[3]) {
            row3letter4.style.backgroundColor = "rgb(0, 211, 0)"
            row3letter4.style.transition = "1s"
        }

        if(correctGuessesrow3.join("") === randomWord.join("")) {
            setTimeout(() => {window.alert("Congratualions! You found the CORRECT 4 letter word")}, 1600)
            document.getElementById("playAgainBtn").style.display = "block"
        }

        document.getElementById("row3guess").style.display = "none"
        
        document.getElementById("row4guess").style.display = "block"
        // console.log("RANDOM WORD: " + randomWord)

        // console.log("FILTERED: " + correctGuessesrow3)

    }
}

let row4guess = []

function row4Guess() {
    
    if(document.getElementById("row4letter1").value === "" 
    || document.getElementById("row4letter2").value === ""
    || document.getElementById("row4letter3").value === ""
    || document.getElementById("row4letter4").value === ""
    ) {
        window.alert("Please fill the row with a word")
    } else if(row1guess.length === 0) {
        window.alert("Please fill the previous rows")
    } else {
        row4guess.push(document.getElementById("row4letter1").value)
        row4guess.push(document.getElementById("row4letter2").value)
        row4guess.push(document.getElementById("row4letter3").value)
        row4guess.push(document.getElementById("row4letter4").value)
        // window.alert(row4guess)

        let row4letter1 = document.getElementById("row4letter1")
        let row4letter2 = document.getElementById("row4letter2")
        let row4letter3 = document.getElementById("row4letter3")
        let row4letter4 = document.getElementById("row4letter4")


        let correctGuessesrow4 = []

        row4guess.filter((letter) => {
            if(randomWord.includes(letter)) {
                correctGuessesrow4.push(letter)
            }
        })

        // console.log("ROW 1 GUESS", row4guess)

        
        for(let i = 0; i < correctGuessesrow4.length; i++) {
            console.log(correctGuessesrow4[i])
            if(correctGuessesrow4[i] === row4guess[0]) {
                row4letter1.style.backgroundColor = "rgb(255, 184, 53)"
                row4letter1.style.transition = "1s"
            } else if(correctGuessesrow4[i] === row4guess[1]) {
                row4letter2.style.backgroundColor = "rgb(255, 184, 53)"
                row4letter2.style.transition = "1s"
            } else if(correctGuessesrow4[i] === row4guess[2]) {
                row4letter3.style.backgroundColor = "rgb(255, 184, 53)"
                row4letter3.style.transition = "1s"
            } else if(correctGuessesrow4[i] === row4guess[3]) {
                row4letter4.style.backgroundColor = "rgb(255, 184, 53)"
                row4letter4.style.transition = "1s"
            }
        }

        if(randomWord[0] === row4guess[0]) {
            row4letter1.style.backgroundColor = "rgb(0, 211, 0)"
            row4letter1.style.transition = "1s"
        } 
        
        if(randomWord[1] === row4guess[1]) {
            row4letter2.style.backgroundColor = "rgb(0, 211, 0)"
            row4letter2.style.transition = "1s"
        } 
        
        if(randomWord[2] === row4guess[2]) {
            row4letter3.style.backgroundColor = "rgb(0, 211, 0)"
            row4letter3.style.transition = "1s"
        }
        
        if(randomWord[3] === row4guess[3]) {
            row4letter4.style.backgroundColor = "rgb(0, 211, 0)"
            row4letter4.style.transition = "1s"
        }

        if(correctGuessesrow4.join("") === randomWord.join("")) {
            setTimeout(() => {window.alert("Congratualions! You found the CORRECT 4 letter word")}, 1600)
            document.getElementById("playAgainBtn").style.display = "block"
        }

        document.getElementById("row3guess").style.display = "none"
        
        document.getElementById("row4guess").style.display = "block"

        document.getElementById("playAgainBtn").style.display = "block"

        document.getElementById("guessSubtitle").innerHTML = `The word was <span id="randomWord">${randomWord.join("")}</span>`
        // console.log("RANDOM WORD: " + randomWord)

        // console.log("FILTERED: " + correctGuessesrow4)

    }
}
