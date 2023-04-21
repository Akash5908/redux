export const incNum = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const mulNum = (num) => {
    return {
        type: "MULTIPLY",
        payload: num
    }
}
export const decNum = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    }
}
export const apiData = (data) => {
    return {
        type: "GET_DATA",
        payload: data
    }
}