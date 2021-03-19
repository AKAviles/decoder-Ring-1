// Write your tests here!
  
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("Solution", () => {
    describe("caesarModule.caesar", () => {
        it("should encode/decode input message by designated shift amount", () => { 
            const actual = caesar("thinkful", 3); 
            expect(actual).to.equal("wklqnixo");
            const actual2 = caesar("wklqnixo", 3, false);
            expect(actual2).to.equal("thinkful")
         });
         it("return 'false'  if shift value is not present", () => {
             const actual = caesar("thinkful");
             expect(actual).to.be.false;
         })       
         it("return 'false'  if shift value is < -25", () => {
             const actual = caesar("thinkful", -26);
             expect(actual).to.be.false
         })
         it("return 'false'  if shift value is 0", () => {
             const actual = caesar("thinkful", 0);
             expect(actual).to.be.false
         })
         it("return 'false'  if shift value is > 25", () => {
             const actual = caesar("thinkful", 26);
             expect(actual).to.be.false
         })    
         
         it("spaces should be maintained thoughout, and other non-alphabetic symbols", () => {
             const actual = caesar("This is a secret message!", 8);
             expect(actual).to.equal("bpqa qa i amkzmb umaaiom!")
         });

         it("Capital letters should be ignored", () => {
            const actual = caesar("THINKFUL", 3);
            expect(actual).to.equal("wklqnixo")
         })
        })
    })
