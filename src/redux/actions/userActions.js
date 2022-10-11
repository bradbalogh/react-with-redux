
export const addUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: user
        })
    }
}