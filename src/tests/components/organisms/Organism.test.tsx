import { Organism } from "@components/index"
import { render } from "@testing-library/react"

describe("Organism test", () => {
	it("should test Organism", () => {
		const component = render(<Organism text="Test text" />)
		expect(component).toMatchSnapshot()
	})
})
