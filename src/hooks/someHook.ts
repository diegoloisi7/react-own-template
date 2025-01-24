type Params = {
	param1: string
}

type Response = {
	response1: string
}
type SomeHookType = (params: Params) => Response

export const someHook: SomeHookType = (params) => {
	// * actions *

	return {
		response1: params.param1,
	}
}
