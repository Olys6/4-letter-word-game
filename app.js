const words = [
    "four", "able", "aged",
    "army", "bank", "band",
    "base", "boat", "king", 
    "acid", "bird", "burn", 
    "camp", "bone", "down", 
    "earn", "gift"
]

const randomWord = words[Math.floor(Math.random() * words.length)].split("")

function row1Guess() {
    let row1guess = []
    if(document.getElementById("row1letter1").value === "" 
    || document.getElementById("row1letter2").value === ""
    || document.getElementById("row1letter3").value === ""
    || document.getElementById("row1letter4").value === ""
    ) {
        window.alert("YOU NEED TO FILL THE FIRST ROW WITH A WORD")
    } else {
        row1guess.push(document.getElementById("row1letter1").value)
        row1guess.push(document.getElementById("row1letter2").value)
        row1guess.push(document.getElementById("row1letter3").value)
        row1guess.push(document.getElementById("row1letter4").value)
        // window.alert(row1guess)

        let correctGuesses = []

        row1guess.filter((letter) => {
            if(randomWord.includes(letter)) {
                correctGuesses.push(letter)
            }
        })

        console.log("RANDOM WORD: " + randomWord)

        console.log("FILTERED: " + correctGuesses)

        // if(randomWord === row1Guess) {
        //     windows.alert("YOU GUESS THE WORD")
        // } else if()
    }
    
    
}

