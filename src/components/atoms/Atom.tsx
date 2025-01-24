import { FC } from "react"

type AtomProps = {
	text: string
}

export const Atom: FC<AtomProps> = ({ text }) => {
	return <div>{text}</div>
}
