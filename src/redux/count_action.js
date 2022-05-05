



export const creatIncrement = data => ({ type: 'increment', data })

export const creatDecrement = data => ({ type: 'decrement', data })


export const creatIncrementAysnc = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(creatIncrement(data))
        }, time)
    }
}