import { someUtil } from "@utils/someUtil"

describe("utils test", () => {
	it("should test util", () => {
		const response = someUtil()
		expect(response).toBe("do-something")
	})
})
