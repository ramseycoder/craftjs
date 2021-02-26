import React from 'react'
import {Paper,Typography,Grid} from '@material-ui/core'
import SettingPanel from "./components/SettingPanel";
import Toolbox from "./components/Toolbox";
import TopBar from "./components/TopBar";
import Button from "./components/user/Button";
import Text from "./components/user/Text";
import Container from "./components/user/Container";
import Card from "./components/user/Card";

import {Editor,Frame,Element} from "@craftjs/core"

const App = ()=>{

    return (
        <div style={{width:'800px',margin:'0 auto'}}>
            <Typography variant='h5' align='center'>A super simple page Editor</Typography>
            <Editor resolver={{Text,Button,Container,Card}}>
                <Grid container spacing={0} style={{padding:'10px'}}>
                    <Grid item xs>
                        <TopBar />
                    </Grid>
                    <Grid container spacing={3} item>

                        <Grid item xs>
                            <Frame>
                                <Element  is={Container} padding={5} background={'#eee'} canvas>
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
                        </Grid>


                        <Grid item xs={3}>
                            <Paper>
                                <Toolbox />
                                <SettingPanel />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Editor>
        </div>
    )
}


export default App;
