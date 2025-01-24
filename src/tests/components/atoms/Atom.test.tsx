import { Atom } from "@components/index"
import { render } from "@testing-library/react"

describe("Atom test", () => {
	it("should test Atom", () => {
		const component = render(<Atom text="Test text" />)
		expect(component).toMatchSnapshot()
	})
})
