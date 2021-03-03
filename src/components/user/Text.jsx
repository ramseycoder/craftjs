import React from 'react';
import {useNode} from '@craftjs/core'
import {setElement} from "../../redux/actions";
import {connect} from 'react-redux'
import {SelectElement} from "../../functions";

const Text = ({text,fontSize,setElement,color,...rest})=>{
    const {marginTop=0,marginBottom=0,marginLeft=0,marginRight=0,alignText} = rest;
    const {paddingTop=5,paddingBottom=5,paddingLeft=5,paddingRight=5} = rest;
    const {connectors:{drag,connect},setProp}  = useNode(state=>({
        dragged:state.events.dragged,
        selected:state.events.selected
    }))
    return (
            <div ref={ref => connect(drag(ref))} onClick={(e)=> {
                setElement({setProp, type: 'text'})

                SelectElement(e.target)
                e.stopPropagation();
            }}>
               <p style={{
                   fontSize,
                   color,
                   marginRight:marginRight+"px",
                   marginTop:marginTop+"px",
                   marginLeft:marginLeft+"px",
                   marginBottom:marginBottom+"px",
                   paddingRight:paddingRight+"px",
                   paddingTop:paddingTop+"px",
                   paddingLeft:paddingLeft+"px",
                   paddingBottom:paddingBottom+"px",
                   textAlign:alignText
               }}>{text}</p>
            </div>
    )
};

const mapDispatchToProps = dispatch=>{
    return {
        setElement:(data)=>dispatch(setElement(data))
    }
}



export default connect(null,mapDispatchToProps)(Text);
