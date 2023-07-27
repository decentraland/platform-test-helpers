import { runProgram } from "../src"

describe("unit", () => {
  it("smoke test", () => {
    expect(typeof runProgram).toEqual("function")
  })
})
