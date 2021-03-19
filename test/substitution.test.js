// Write your tests here!

const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("Solution", () => {
    describe("substitutionModule", () => {
        it("should return false if substitution alphabet is missing", () => {
            const actual = substitution("abc")
            expect(actual).to.be.false
        })
        it("should return false if substituion alphabet does not equal 26 characters", () => {
            const actual = substitution("asdf", "abcdefghijklmnopqr");
            expect(actual).to.be.false
        })
        it("should return 'false' if alphabet does not have unique characters", () => {
            const actual = substitution('abc', 'abaaaab');
            expect(actual).to.be.false
        })

    })
})