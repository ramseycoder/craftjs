import React from 'react';
import {Button as MaterialButton} from '@material-ui/core'
import {useNode} from "@craftjs/core";
import {connect} from 'react-redux'
import {setElement} from "../../redux/actions";
import {SelectElement} from "../../functions";

function Button ({size,variant,color,btn,setElement,background,href,fontSize,...rest}){
    const {marginTop=0,marginBottom=0,marginLeft=0,marginRight=0} = rest;
    const {paddingTop=5,paddingBottom=5,paddingLeft=5,paddingRight=5} = rest;
    const {connectors:{connect,drag},setProp} = useNode()
    return (

            <a
                href={href}
                onClick={(e)=> {
                    setElement({setProp, type: 'btn'})
                    SelectElement(e.target)
                    e.stopPropagation();
                    e.preventDefault();
                    console.log("target ",e.target);
                }}
                target={'_blank'}
                ref={ref=>connect(drag(ref))}
                style={{
                    display:'inline-block',
                    color,
                    background,
                    fontSize,
                    marginRight:marginRight+"px",
                    marginTop:marginTop+"px",
                    marginLeft:marginLeft+"px",
                    marginBottom:marginBottom+"px",
                    paddingRight:paddingRight+"px",
                    paddingTop:paddingTop+"px",
                    paddingLeft:paddingLeft+"px",
                    paddingBottom:paddingBottom+"px",
                }}
            >
                {btn}
            </a>
 
    )
}

const mapDispatchToProps = dispatch=>{
    return {
        setElement:(data)=>dispatch(setElement(data))
    }
}

export default connect(null,mapDispatchToProps)(Button);
