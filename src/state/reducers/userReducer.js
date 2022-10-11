

const reducer = (state = [], action) => {
    switch (action.type) {
        case "create":
            return [...state, action.payload];
        default:
            return state;
    }
}

export default reducer;