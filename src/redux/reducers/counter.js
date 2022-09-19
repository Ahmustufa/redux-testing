import { useState } from "react"

// const [counter, setCounter] = useState(0)

// export const counterChange = (e)=>{
//   const value = e.target.value
//   setCounter(value)
// }

const initialState = 0;
const changeNum = (state = initialState, action)=>{
    switch (action.type) {
        case "INCREMENT" : return state + 1
        case "DECREMENT" : return state - 1
        default: return state
    }
}

export default changeNum;