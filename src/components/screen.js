import { useContext } from "react";
import { valuesContext } from "../App"

export const Screen = () => {

    const {values} = useContext(valuesContext);
    return (
        <div className = "screen-container">  
                {values.curValue}
        </div>
    )
}