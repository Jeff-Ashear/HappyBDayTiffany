const sorry = "Not quite... Try again! :*"
let step = 0
let prompt = [
    "The place with the bad cat food.",
    "The best place to hide weed or filing cabinets.",
    "The place with the garden tools.",
    "In the linnen closet between these objects."
]
let correctAnswer = [
    "cabinet",
    "plant lab",
    "shed",
    "blanket"
]


$(document).ready(function(e) {
    $('#hint').text(prompt[step])
    // e.preventDefault();
})

$(function() {
    $('#answer').submit(function(e) {
        let userAnswer = $('#answerText').val()
        console.log(userAnswer)

        if (userAnswer == correctAnswer[step]) {
            $('#feedback').text("You're right!!! Hurray!!!")
            step += 1
            let thisPrompt = ""
            for (let i = 0; i < prompt[step].length; i++) {
                interval = Math.ceil(Math.random() * 10) * 100
                setTimeout(function(str) {
                    thisPrompt = thisPrompt + prompt[step][i]
                    // console.log(prompt[step][i])
                    $('#hint').text(thisPrompt)
                    // console.log(thisPrompt)
                }, interval)
            }
            // $('#hint').text(prompt[step])
        } else {
            $('#feedback').text(sorry)
        }
        e.preventDefault();
    })
})