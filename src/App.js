import React, {useEffect,useRef} from 'react'
import {Paper,Typography,Grid} from '@material-ui/core'
import SettingPanel from "./components/SettingPanel";
import Toolbox from "./components/Toolbox";
import TopBar from "./components/TopBar";
import Button from "./components/user/Button";
import Text from "./components/user/Text";
import Container from "./components/user/Container";
import Card from "./components/user/Card";
import {connect} from 'react-redux'
import TwoDivs from "./components/user/twoDivs";

import {Editor,Frame,Element} from "@craftjs/core"
import EditableText from "./components/EditableText";

const App = ({value})=>{
    const divRef = useRef(null);
    useEffect(()=>{
        
        if(value && window.document.querySelector('.editableElement')){
            window.document.querySelector('.editableElement').style.display = 'block';
            setTimeout(()=>{
                window.document.querySelector('.editableElement').style.marginRight = '0px';
            },0)
        }else if(window.document.querySelector('.editableElement')){
            window.document.querySelector('.editableElement').style.marginRight = '-500px';
            setTimeout(()=>{
                window.document.querySelector('.editableElement').style.display = 'none';
            },220)
        }
    },[value]);

    useEffect(()=>{
        console.log('divRef ',divRef.current?.firstChild.outerHTML)
        if(divRef.current)console.log(divRef.current.firstChild.outerHTML)
    })
    return (
        <div style={{width:'1300px',margin:'0 auto'}}>
            <Typography variant='h5' align='center'>A super simple page Editor</Typography>
            <Editor resolver={{Text,Button,Container,Card,TwoDivs}} >
                <Grid container spacing={0} style={{padding:'10px'}}>
                    <Grid item xs>
                        <TopBar />
                    </Grid>
                    <Grid container spacing={3} item>
                        <Grid item xs style={{maxHeight:"90vh",overflow:"scroll"}}>
                            <div ref={divRef} className={'previewhtml'}>
                                <Frame>
                                    <Element  is={Container} padding={10}  background={'#eee'} canvas>
                                        <Card />
                                        <Text size="small" text="Hi world!" />
                                        <Text size="small" text="Hey world!" />
                                        <Text size="small" text="Holla world!" />
                                        <Text size="small" text="Hey world!" />
                                        <Element is={Container} padding={6} background="#999" canvas>
                                            <Text size="small" text="It's me again!" />
                                        </Element>
                                    </Element>
                                </Frame>
                            </div>
                        </Grid>


                        {!value && <Grid item xs={3}>
                            <Paper>
                                <Toolbox/>
                                <SettingPanel/>
                            </Paper>
                        </Grid>}
                        <Grid item>
                            <EditableText />
                        </Grid>
                    </Grid>
                </Grid>

            </Editor>
        </div>
    )
}

const mapStateToProps = state=>{
    return {
        value:state.type
    }
}

export default connect(mapStateToProps,null)(App);
