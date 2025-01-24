// src/hooks/__tests__/useCounter.test.ts
import { someHook } from "@hooks/someHook"
import { renderHook } from "@testing-library/react"

describe("someHook", () => {
	it("should test hook", () => {
		const { result } = renderHook(() => someHook({ param1: "test" }))

		expect(result.current.response1).toBe("test")
	})
})
