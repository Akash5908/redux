const initialState = 1;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT" : return state + action.payload;
        case "DECREMENT": return state - action.payload;
        case "MULTIPLY": return state * action.payload
        default: return state;
    }
}

export default changeTheNumber