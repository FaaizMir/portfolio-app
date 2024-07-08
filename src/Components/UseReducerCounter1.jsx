import { useReducer } from "react"
const UseReducerCounter1 = () => {

    let state=4;
const reducer=(state,action)=>{
if(action.type==="increment") return state + action.payload;
if(action.type==="decrement") return state + action.payload;
}

    const [count,dispatch]=useReducer(reducer,state)

  return (
    <div>
      <button onClick={()=>dispatch({type:"decrement",payload:-1})}>Decrement</button>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:"increment",payload:1})}>Increment</button>
    </div>
  )
}

export default UseReducerCounter1
