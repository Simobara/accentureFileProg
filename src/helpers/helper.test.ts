import { getPriceFromString } from "./helper"

describe("helper functions", () => {
    describe('getPriceFromString', () => {
        it('returns correct price', () => { 
            const input = '$25'
            const result = getPriceFromString(input)
            expect (result).toBe(25)
        })
    })
})