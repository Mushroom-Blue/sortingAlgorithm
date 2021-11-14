describe("sort", () => {
    it("sort the given array [8,9,3,5,6,1]", ()=> {
        let array = [8,9,3,5,6,1]
        let result = [1,3,5,6,8,9]
        expect(sort(array)).toEqual(result)
    })
    it("sort the given array [3,6,2,9,7]", ()=> {
        let array = [3,6,2,9,7]
        let result = [2,3,6,7,9]
        expect(sort(array)).toEqual(result)
    })
    it("sort the given array [22,11,13,45,36,25]", ()=> {
        let array = [22,11,13,45,36,25]
        let result = [11,13,22,25,36,45]
        expect(sort(array)).toEqual(result)
    })
    it("sort the given array [34,88,103,45,307]", ()=> {
        let array = [34,88,103,45,307]
        let result = [34,45,88,103,307]
        expect(sort(array)).toEqual(result)
    })
})