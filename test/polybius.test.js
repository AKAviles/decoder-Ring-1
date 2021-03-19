// Write your tests here!

const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("Solution", () => {
    describe("polybiusModule.polybius", () => {
        it("Should encode/decode input message", () => {
            const actual = polybius("thinkful");
            expect(actual).to.equal("4432423352125413")
            const actual2 = polybius("4432423352125413", false);
            expect(actual2).to.equal("th(i/j)nkful")
        })
        it("Should encode 'I' and 'J' to 42 and decode to i/j", () => {
            const actual1 = polybius("i");
            const actual2 = polybius("j");
            expect(actual1 && actual2).to.equal("42")
            const actual3 = polybius("42", false);
            expect(actual3).to.equal("(i/j)")
        })
        it("Should return false if number of digits is odd", () => {
            const actual = polybius("44324233521254134", false)
            expect(actual).to.equal(false)
        })
    })
})