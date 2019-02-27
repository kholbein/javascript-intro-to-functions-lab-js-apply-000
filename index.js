function shout(string) {
   return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log("HELLO")
}

function logWhisper(string) {
  console.log('hello')
}


var uppercase = "HELLO"

uppercase.toUpperCase() === uppercase

var lowercase = "hello"

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase

function sayHiToGrandma(string) {
<<<<<<< HEAD
  string.toLowerCase() === lowercase
  return 'I can\'t hear you!'
=======
  lowercase.toLowerCase() === lowercase
  return 'YES INDEED!'
>>>>>>> 920e92860b099cf42bca58847cb02c54faefb5af
}