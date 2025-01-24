import { Molecule } from "@components/index"
import { render } from "@testing-library/react"

describe("Molecule test", () => {
	it("should test Molecule", () => {
		const component = render(<Molecule text="Test text" />)
		expect(component).toMatchSnapshot()
	})
})
