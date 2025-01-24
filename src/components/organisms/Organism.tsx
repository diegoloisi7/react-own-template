import { Molecule } from "@components/molecules"
import { FC } from "react"

type OrganismProps = {
	text: string
}

export const Organism: FC<OrganismProps> = ({ text }) => {
	return <Molecule text={text} />
}
