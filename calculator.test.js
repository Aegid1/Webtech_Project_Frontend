import calculator from "./calculator";

test("should know  1+1 = 2", () => {
    const expected = 2;
    const actual = add(1, 1);
    expect(actual).toBe(expected);
})