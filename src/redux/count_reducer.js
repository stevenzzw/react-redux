

const initState = 1
export default function countReducer(preState = initState, action) {   // if prestate undefine, initial prestate
    const { type, data } = action
    //    console.log(preState);
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data

        default:
            return preState
    }
}