import { someService } from "@services/someService"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)
describe("services test", () => {
	beforeEach(() => {
		mock.reset()
	})

	it("should test service", async () => {
		mock.onGet("url").reply(200, [{ text: "response" }])
		const response = await someService()
		expect(response.data).toEqual([{ text: "response" }])
	})
})
