import React from 'react';
import {Grid} from "@material-ui/core";
import {Element,useNode} from '@craftjs/core'
import Text from "./Text";
import {setElement} from '../../redux/actions';
import {connect} from 'react-redux';
import {SelectElement} from "../../functions";
import Card from "./Card";

function TwoDivs(props) {
    const {marginTop=0,marginBottom=0,marginLeft=0,marginRight=0,div=" "} = props;
    const {paddingTop=5,paddingBottom=5,paddingLeft=5,paddingRight=5,setElement} = props;
    const {connectors:{connect,drag},setProp} = useNode()
    return (
        <div style={{
            marginRight:marginRight+"px",
            marginTop:marginTop+"px",
            marginLeft:marginLeft+"px",
            marginBottom:marginBottom+"px",
            paddingRight:paddingRight+"px",
            paddingTop:paddingTop+"px",
            paddingLeft:paddingLeft+"px",
            paddingBottom:paddingBottom+"px",
        }} className={'divParent'} ref={ref=>connect(drag(ref))} onClick={(e)=> {
           
            SelectElement(e.target)
        }}>
            <Grid container spacing={1}>
                <Grid item xs>
                     <Element id={"div1"} canvas>
                           <Card drag={false} />
                     </Element>
                </Grid>
                <Grid item xs>
                    <Element id={"div2"} canvas>
                        <Card drag={false} />
                    </Element>
                </Grid>
            </Grid>
        </div>
    );
}

const mapDispatchToProps = dispatch=>{
    return {
        setElement:(data)=>dispatch(setElement(data))
    }
}

export default connect(null,mapDispatchToProps)(TwoDivs);
