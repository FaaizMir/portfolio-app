import { useReducer } from "react"
const UseReducerCounter2 = () => {

const initialState={count:0 , step:0}
function reducer(state,action){
console.log(state.step);
switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
    case "setStep":
        return {...state, step:action.payload}
    default:
      throw new Error("Unknown action type");
  }

}

const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <button className="text-2xl bg-green-800 p-3" onClick={()=>{dispatch({type:"inc"})}}>Increase</button>
<h1 className="m-5">{state.count}</h1> 
<input onChange={(e)=>{dispatch({type:"setStep", payload:Number(e.target.value) })}} className="p-6" type="text" placeholder="enter step value" />
<br />
 <button className="text-2xl bg-green-800 p-3" onClick={()=>{dispatch({type:"dec"})}}>Decrease</button>
 <h1>{state.step}</h1>

    </div>
  )
}

export default UseReducerCounter2
