import React from "react";
import ReactDOM from "react-dom"
import Element from "Element"

class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
            result:""
    }
    this.handleClick = this.handleClick.bind(this);
    this.compute = this.compute.bind(this);
}

handleClick(values){
    if(values=="AC" || values=="CE"){
        this.setState({...this.state,result:""})
        return;
    }else if(values == "="){
        this.compute();
        return;
    }else if(values == "+/-"){
        const res = eval(this.state.result)*-1; 
        const resString = res.toString()
        this.setState({...this.state,result:resString})
        return;
    }
    this.setState({...this.state,result:this.state.result+values})
}


compute(){
    let cal =  this.state.result;
    const final = eval(cal).toString();
    this.setState({...this.state,result:final});
}


 render() {

    const key = ["AC","+/-","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","CE","="].map((item,index)=>{
        return <Element key={index} value={item} handleClick={this.handleClick}/>
     } )
    return (
        <React.Fragment>
                <section className="row display">
                    <div className="col-lg-12 col-sm-12">
                    <section className="keyresult pb-5 pl-5">{this.state.result}</section>
                    </div>
                </section>
                <section className="row">   
                        {key}
                </section>
        </React.Fragment>
    )
    }
}

export default Calculator