function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    return console.log(string.toUpperCase())
}

function logWhisper(string) {
    return console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
   const whisper = "I can't hear you!"
   const shout = "YES INDEED!"
   const dinner = "I would love to!"

   if (string.toLowerCase() === string) {
    return whisper
   }

   else if (string.toUpperCase() === string) {
    return shout
   }

   else if ("Let's have dinner together!") {
    return dinner
   }
}
   

