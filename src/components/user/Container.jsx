import React from 'react'
import {Paper} from '@material-ui/core'
import {useNode} from "@craftjs/core";

const Container = ({children,padding=0,background})=>{
    const {connectors:{connect,drag}} = useNode()
    return (
            <Paper ref={ref => connect(drag(ref))} style={{margin:'5px 0',padding:`${padding}px`,background}}>
                {children}
            </Paper>
    )
};


export default Container;
