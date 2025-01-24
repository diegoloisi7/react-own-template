import { someMapper } from "@constants/someMapper"

describe("constants test", () => {
	it("should test constant", () => {
		const response = someMapper["REACT"]
		expect(response).toBe("react")
	})
})
