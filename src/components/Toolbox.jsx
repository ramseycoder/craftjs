import React from 'react';
import {Box,Grid,Typography,Button as MaterialButton} from '@material-ui/core'
import {Element,useEditor} from '@craftjs/core'
import Button from "./user/Button";
import Text from "./user/Text"
import Container from './user/Container'
import Card from "./user/Card";
import TwoDivs from "./user/twoDivs";
function Toolbox(props) {
    const {connectors:{create}} = useEditor()
    return (
        <Box px={2} py={2} >
            <Grid container direction='column' alignItems='center' justify='center' spacing={1}>
                 <Box pb={2}>
                        <Typography>Glisser pour deposer</Typography>
                 </Box>
                <Grid container direction='column' item>
                    <MaterialButton ref={ref=>create(ref,<Button btn="Click me" size={"small"} variant={"contained"} color={'primary'} />)} variant='contained'>Button</MaterialButton>
                </Grid>
                <Grid container direction='column' item>
                    <MaterialButton ref={ref=>create(ref,<Text text={"Juste un test"} fontSize={10} />)} variant='contained'>Text</MaterialButton>
                </Grid>
                <Grid container direction='column' item>
                    <MaterialButton ref={ref=>create(ref,<Element is={Container} padding={20} canvas/>)} variant='contained'>Container</MaterialButton>
                </Grid>
                <Grid container direction='column' item>
                    <MaterialButton ref={ref=>create(ref,<Card />)} variant='contained'>Card</MaterialButton>
                </Grid>
                <Grid container direction='column' item>
                    <MaterialButton ref={ref=>create(ref,<TwoDivs />)} variant='contained'>2 Divs</MaterialButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Toolbox;
