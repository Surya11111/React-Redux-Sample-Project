import React from "react";

const styleBox = (value) => {
    if(value == "/" || (value == "*")  || (value == "+")  || (value == "-")  || (value == "=")  ){
        return {
            backgroundColor: "orange"
        }
    }
}


const Element =(props)=>{
 return (
     <div className="col-lg-3 col-sm-3 col-md-3 col-3 key-section" style={styleBox(props.value)}>
        <p className="key" onClick={()=>props.handleClick(props.value)}>{props.value}</p>
     </div>
 )
}


export default Element;