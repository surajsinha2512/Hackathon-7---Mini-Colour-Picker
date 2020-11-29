
import React,{useState} from 'react';

const Selection = (props) => {
    const [nextBackground, selectNextBackground] = useState({ nextBackground: "" })
   const applyColor=()=>{
 //   ["selection1", "selection2", "selection3"].map(key => (
 //       <Selection key={key} applyColor={applyColor} />
   }
    return (
  <div onClick={props.applyColor} className="fix-box" style={{background:''}}>
   <h2 className="subheading">Selection</h2>
  </div>
  )
}
export default Selection;
