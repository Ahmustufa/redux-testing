import { incNumber, decNumber } from './redux/actions';
import {useSelector, useDispatch} from 'react-redux'
import changeNum from "./redux/reducers/counter";

function App() {
 const myState = useSelector((state)=> state.changeNum)
 const dispatch = useDispatch()
 
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "600px", border: "2px solid gray", backgroundColor: "papayawhip"}}>
      
      <h1>Increment/ Decrement counter</h1>
      <h4>using React and Redux</h4>
      <br/>
      <div style={{display: "flex"}}>
      <button style={{color: "palevioletred" , backgroundColor: "#fbf6f7", padding: "10px", fontSize: "1rem"}} onClick={()=>dispatch(decNumber())} ><b>-</b></button>
      <input style={{color: "palevioletred" , backgroundColor: "#fbf6f7", fontSize: "1rem"}} value={myState}></input>
      <button style={{color: "palevioletred" , backgroundColor: "#fbf6f7", padding: "10px", fontSize: "1rem"}} onClick={ ()=>dispatch(incNumber())} ><b>+</b></button>
      </div>
    </div>
  );
}

export default App;
