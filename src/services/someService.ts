import axios from "axios"

export const someService = async () => {
	const res = await axios.get("url")
	return res
}
