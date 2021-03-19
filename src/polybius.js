// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //alphabet key in object form
  //key value pairs for ease of decoding and encoding
  const alphabet = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };
  //access object key helper function
  function getKeyByValue (object, value) {
    for (let property in object) {
      if (object.hasOwnProperty (property)) {
        if (object[property] === value) return property;
      }
    }
  }
  //helper function
  function isALetter (value) {
    return /[a-zA-Z]/.test (value);
  }
  //helper function
  function isANumber (input) {
    const numbers = /^[0-9]+$/;
    if (input.match (numbers)) {
      return true;
    } else {
      return false;
    }
  }
  //helper function
  function divisibleBy2 (input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== ' ' && input[i + 1] !== ' ') {
        sum += 1;
      }
    }
    if (sum % 2 != 0) {
      return false;
    } else {
      return true;
    }
  }
  //actual function
  function polybius (input = '', encode = true) {
    // your solution code here
    // const newinput = input.toLowerCase ();

    if (encode) {
      const newinput = input.toLowerCase ();
      let output = [];
      for (let i = 0; i < newinput.length; i++) {
        if (!isALetter (input[i])) {
          output.push (input[i]);
        } else {
          output.push (alphabet[newinput[i]]);
        }
      }
      return output.join ('');
    }

    if (!encode) {
      let output = [];
      let integer;
      let i = 0;

      if (input.replace (/\D/, '').length % 2 === 1) return false;
      while (i < input.length) {
        if (!isANumber (input[i])) {
          output.push (input[i]);
          i++;
        }
        if (isANumber (input[i]) && isANumber (input[i + 1])) {
          //convert string to integer

          integer = parseInt (`${input[i]}${input[i + 1]}`, 10);

        }
        //push i/j manually
        if (integer === 42) {
          output.push ('(i/j)');
          i = i + 2;
        } else {
          output.push (getKeyByValue (alphabet, integer));
          i = i + 2;
        }
      }
    
      return output.join ('');
    }
  }
 
  return {
    polybius,
    
  };
  
}) ();

module.exports = polybiusModule.polybius;
