// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true ) {
   let lowerCaseStr = input.toLowerCase();
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let newStr = '';
    if (shift === 0 || shift < -25 || shift > 25 || !shift){
        return false
    }
   for (let i = 0; i < lowerCaseStr.length; i++) {
      let currentLetter = lowerCaseStr[i];
      if (currentLetter === ' ') {
         newStr += currentLetter;
         continue;
      } 
      const code = currentLetter.charCodeAt()
      if (code < 97 || code > 122) {
          newStr += currentLetter
          continue;
      }
      let currentIndex = alphabet.indexOf(currentLetter);
     let newIndex = currentIndex + shift;
     let decodeIndex = currentIndex - shift;
     if (encode === true) {
     if(newIndex > 25) {
         newIndex -= 26
         newStr += alphabet[newIndex]
     } else if (newIndex < 0) {
         newIndex += 26
         newStr += alphabet[newIndex]
     } else newStr += alphabet[newIndex]
   } else {
       if (decodeIndex > 25) {
           decodeIndex -= 26
           newStr += alphabet[decodeIndex];
       } else if (decodeIndex < 0) {
            decodeIndex += 26
           newStr += alphabet[decodeIndex];
       } else newStr += alphabet[decodeIndex]
   }
   }
   return newStr
  }
  return {
      caesar,
  };
})();

module.exports = caesarModule.caesar;
