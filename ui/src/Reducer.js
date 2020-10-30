const Reducer = (state, action) => {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,
                urls: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;