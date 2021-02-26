import React from 'react';
import {Button as MaterialButton} from '@material-ui/core'
import {useNode} from "@craftjs/core";

function Button ({size,variant,color,text}){
    const {connectors:{connect,drag}} = useNode()
    return (

            <MaterialButton ref={ref=>connect(drag(ref))} size={size} variant={variant} color={color}>
                {text}
            </MaterialButton>
 
    )
}

export default Button;
