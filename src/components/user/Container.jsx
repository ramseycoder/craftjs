import React from 'react'
import {Paper} from '@material-ui/core'
import {useNode} from "@craftjs/core";
import {setElement} from "../../redux/actions";
import {connect} from 'react-redux'
import {SelectElement} from "../../functions";

const Container = ({children,padding=0,background,setElement,draggable})=>{
    const {connectors:{connect,drag},setProp} = useNode()
    return (
            <Paper onClick={(e)=> {
                setElement({setProp, type: 'div'})
                console.log('e ', e.target)
                SelectElement(e.target);
                e.stopPropagation()
            }} ref={ref => connect(draggable?drag(ref):ref)} style={{margin:'5px 0',padding:`${padding}px`,background}}>
                {children}
            </Paper>
    )
};

const mapDispatchToProps = dispatch=>{
    return {
        setElement:(data)=>dispatch(setElement(data))
    }
}

export default connect(null,mapDispatchToProps)(Container);
