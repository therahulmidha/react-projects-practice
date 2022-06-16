import { useEffect, useReducer } from "react"
import { fakeAxios } from "../utils/fakeAxios"
const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error",
}
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: [] }
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return { ...state, hasNextPage: action.payload.hasNextPage }
        default:
            return state;
    }
}
export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

    useEffect(() => {
        dispatch({
            type: ACTIONS.MAKE_REQUEST
        });

        // Github jobs API is now deprecated, so used hardocded data. 
        fakeAxios.get("URL")
            .then(res => {
                dispatch({
                    type: ACTIONS.GET_DATA,
                    payload: {
                        jobs: res.data
                    }
                })
            })
            .catch(error => {
                dispatch({
                    type: ACTIONS.ERROR,
                    payload: { error }
                })
            })
    }, [params, page]);

    return state;
}