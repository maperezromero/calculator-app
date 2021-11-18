import { useContext } from "react";
import { valuesContext } from "../App";

export const Keys = () =>{
    const {values,setValues} = useContext(valuesContext);

    const handleClick = (key) =>{
        let value = 0; 
        values.curValue === 0? value =key : value = values.curValue + `${key}`;
        setValues({...values, curValue: value})
    }

    const handleReset = () =>{
        setValues({curValue:0, preValue:0, total:0})
    }

    const handleDel = () =>{
        let value = Number(`${values.curValue}`.slice(0,-1));
        setValues({...values, curValue: value})
    }
    
    const operations ={
        '+': function(a,b) {return a+b}, 
        '-': function(a,b) {return a-b}, 
        '/': function(a,b) {return a/b}, 
        '*': function(a,b) {return a*b}, 
    }

    const handleOperation = (op) =>{
        const value = values.curValue;
        setValues({...values, op:op, curValue:0, preValue: value})
    }
    const handleCalc = () => {
        if(values.op !== ''){
            setValues({...values, curValue: operations[values.op](Number(values.preValue),Number(values.curValue))})

        }
    }
    return (
        <span className = "keys-container">
            <span className = "keys">
                
                <button className = "button" onClick={()=>handleClick(7)}>
                    7
                </button>
                
            
                <button className = "button" onClick={()=>handleClick(8)}>
                    8
                </button>
            
            
                <button className = "button" onClick={()=>handleClick(9)}>
                    9
                </button>
            
            
                <button className = "button del" onClick={() => handleDel()}>
                    DEL
                </button>
            
            
                <button className = "button" onClick={()=>handleClick(4)}>
                    4
                </button>
            
            
                <button className = "button" onClick={()=>handleClick(5)}>
                    5
                </button>
            
            
                <button className = "button" onClick={()=>handleClick(6)}>
                    6
                </button>
            
            
                <button className = "button" onClick={()=>handleOperation('+')}>
                    +
                </button>
            
            
                <button className = "button" onClick={()=>handleClick(1)}>
                    1
                </button>
            
            
                <button className = "button" onClick={()=>handleClick(2)}>
                    2
                </button>
            
            
                <button className = "button" onClick={()=>handleClick(3)}>
                    3
                </button>
            
            
                <button className = "button" onClick={()=>handleOperation('-')}>
                    -
                </button>
            
            
                <button className = "button" onClick={()=>handleClick('.')}>
                    .
                </button>
            
            
                <button className = "button" onClick={()=>handleClick(0)}>
                    0
                </button>
            
            
                <button className = "button" onClick={()=>handleOperation('/')}>
                    /
                </button>
            
            
                <button className = "button" onClick={()=>handleOperation('*')}>
                    x
                </button>
            
            
                <button className = "button reset" onClick = {() => handleReset()}>
                    RESET
                </button>
            
            
                <button className = "button equal" onClick = {() => handleCalc()}>
                    =
                </button>
                
            </span>   
        </span>
    )
}