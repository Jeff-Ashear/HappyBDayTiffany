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
            $('#hint').text(prompt[step])
        } else {
            $('#feedback').text(sorry)
        }
        e.preventDefault();
    })
})