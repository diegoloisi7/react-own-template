import { Landing } from "@pages/Landing/Landing"
import { render } from "@testing-library/react"

describe("Landing test", () => {
	it("should test Landing", () => {
		const component = render(<Landing />)
		expect(component).toMatchSnapshot()
	})
})
