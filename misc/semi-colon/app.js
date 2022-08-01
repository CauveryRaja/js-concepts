// Guess the output

const callMe = function (word) {
    console.log(word);
}
const myInfo = function() {
    return callMe.bind(this, "Abhishek");
}
(function() {
    console.log("Hello there")
})()