import reactLogo from "@assets/react.svg"
import viteLogo from "/vite.svg"
import "./Landing.css"
import { Organism } from "@components/index"
import { FC } from "react"

export const Landing: FC = () => {
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<Organism text="Template para ahorrar tiempo 😛" />
		</>
	)
}
