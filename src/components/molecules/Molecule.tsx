import { Atom } from "@components/atoms"
import { FC } from "react"

type MoleculeProps = {
	text: string
}

export const Molecule: FC<MoleculeProps> = ({ text }) => {
	return <Atom text={text} />
}
