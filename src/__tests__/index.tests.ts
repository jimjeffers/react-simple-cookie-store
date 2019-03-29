/**
 * @jest-environment jsdom
 */
import { isSecure } from "../index"
jest.mock("universal-cookie", () => jest.fn())

describe("isSecure", () => {
  it("should be true for HTTPS connections", () => {
    expect(isSecure()).toBeTruthy()
  })
})
