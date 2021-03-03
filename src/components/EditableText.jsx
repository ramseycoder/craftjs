import React from 'react';
import {Grid, Typography, Box,  FormLabel, Slider,Tabs,Tab,AppBar,Button,Input,Select,MenuItem} from "@material-ui/core";
import {connect} from 'react-redux'
import {ChangeValue,ResetValue} from "../redux/actions";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}



function EditableText(props) {
    const {ChangeValue,text:value,fontSize,ResetValue,type,href} = props
    const {marginBottom,marginTop,marginLeft,marginRight,paddingRight,paddingTop,paddingLeft,paddingBottom,alignText,background,color} = props;
    const [tabValue, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box px={2} py={3} className="editableElement" style={{marginRight:"-500px",display:"none",position:'relative',minHeight:"400px"}}>
            <AppBar position="static" color="default">
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Contenu" {...a11yProps(0)} />
                    <Tab label="Style" {...a11yProps(1)} />
                    <Tab label="Paramètre" {...a11yProps(2)} />

                </Tabs>
            </AppBar>

                <TabPanel value={tabValue} index={0} >
                    <Grid item xs>
                        <FormLabel>Titre</FormLabel>
                        <Input disabled={type === 'div'?true:false}  style={{width:'100%'}} value={type === 'div'?'':value} onChange={(e) => ChangeValue({value: e.target.value, type: ''})}/>
                    </Grid>

                    {type === 'btn' && <Grid item xs style={{marginTop:'5px'}}>
                        <FormLabel>Lien</FormLabel>
                        <Input placeholder={"http://www.example.com"} value={href} onChange={( e) => ChangeValue({value:e.target.value, type: 'href'})} fullWidth/>
                    </Grid>}
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <Grid container direction={'column'} spacing={2} style={{maxWidth:"500px"}}>
                        <Grid item xs>
                            <FormLabel component={'legend'}>Taille du texte</FormLabel>
                            <Slider
                                value={fontSize}
                                max={150}
                                min={7}
                                step={1}
                                valueLabelDisplay={'auto'}
                                onChange={(_, value) => ChangeValue({value, type: 'fontSize'})}
                            />
                        </Grid>
                        <Grid item xs container>
                            <Grid item xs>
                                <FormLabel component={'legend'}>Couleur</FormLabel>
                                <Input type={'color'}  value={color} style={{width:'50px',height:"50px"}}
                                       onChange={(e) => ChangeValue({value: e.target.value, type: 'color'})}/>
                            </Grid>
                            <Grid item xs>
                                <FormLabel component={'legend'}>Couleur de fond</FormLabel>
                                <Input type={'color'} value={background} style={{width:'50px',height:"50px"}}
                                       onChange={(e) => ChangeValue({value: e.target.value, type: 'background'})}/>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid item container>
                            <Grid item xs>
                                <Grid item xs>
                                    <FormLabel>Marge extérieure</FormLabel>
                                </Grid>
                                <Grid item xs container spacing={1}>
                                    <Grid item xs>
                                        <FormLabel component={'legend'}>Haut</FormLabel>
                                        <Input
                                            value={marginTop}
                                            type={"number"}
                                            onChange={( e) => ChangeValue({value:e.target.value, type: 'marginTop'})}
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <FormLabel component={'legend'}>Bas</FormLabel>
                                        <Input
                                            value={marginBottom}
                                            type={"number"}
                                            onChange={( e) => ChangeValue({value:e.target.value, type: 'marginBottom'})}
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <FormLabel component={'legend'}>Gauche</FormLabel>
                                        <Input
                                            value={marginLeft}
                                            type={"number"}
                                            onChange={( e) => ChangeValue({value:e.target.value, type: 'marginLeft'})}
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <FormLabel component={'legend'}>Droite</FormLabel>
                                        <Input
                                            value={marginRight}
                                            type={"number"}
                                            onChange={( e) => ChangeValue({value:e.target.value, type: 'marginRight'})}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Grid item xs>
                                    <FormLabel>Marge intérieure</FormLabel>
                                </Grid>
                                <Grid item xs container spacing={1}>
                                    <Grid item xs>
                                        <FormLabel component={'legend'}>Haut</FormLabel>
                                        <Input
                                            value={paddingTop}
                                            type={"number"}
                                            onChange={( e) => ChangeValue({value:e.target.value, type: 'paddingTop'})}
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <FormLabel component={'legend'}>Bas</FormLabel>
                                        <Input
                                            value={paddingBottom}
                                            type={"number"}
                                            onChange={( e) => ChangeValue({value:e.target.value, type: 'paddingBottom'})}
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <FormLabel component={'legend'}>Gauche</FormLabel>
                                        <Input
                                            value={paddingLeft}
                                            type={"number"}
                                            onChange={( e) => ChangeValue({value:e.target.value, type: 'paddingLeft'})}
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <FormLabel component={'legend'}>Droite</FormLabel>
                                        <Input
                                            value={paddingRight}
                                            type={"number"}
                                            onChange={( e) => ChangeValue({value:e.target.value, type: 'paddingRight'})}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid item xs>
                            <FormLabel>Alignement du texte</FormLabel> <br />
                            <Select value={alignText} onChange={(e)=> ChangeValue({value:e.target.value,type:"alignText"})}>
                                <MenuItem value={"left"}>A gauche</MenuItem>
                                <MenuItem value={"center"}>Centrer</MenuItem>
                                <MenuItem value={"right"}>A Droite</MenuItem>
                            </Select>
                        </Grid>

                    </Grid>
                </TabPanel>
                <TabPanel value={tabValue} index={2} >
                    <Grid container>

                    </Grid>
                </TabPanel>

            {/*<Grid container spacing={2}>
                <Grid xs item>
                    <Typography>Texte</Typography>
                    <Input value={value} onChange={(e) => ChangeValue({value: e.target.value, type: ''})}/>
                </Grid>
                <Grid xs item>
                    <Typography>Style</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <FormLabel component={'legend'}>Taille du texte</FormLabel>
                            <Slider
                                value={fontSize}
                                max={150}
                                min={7}
                                step={1}
                                valueLabelDisplay={'auto'}
                                onChange={(_, value) => ChangeValue({value, type: 'fontSize'})}
                            />
                        </Grid>
                        <Grid item xs>
                            <FormLabel component={'legend'}>Couleur</FormLabel>
                            <Input type={'color'} style={{width: '50px', height: '50px'}}
                                   onChange={(e) => ChangeValue({value: e.target.value, type: 'color'})}/>

                        </Grid>
                    </Grid>

                </Grid>
                <Grid xs item>
                    <Typography>Couche</Typography>
                </Grid>
            </Grid>*/}
            <div style={{position:'absolute',bottom:"5px", left:"10px"}}>
                <Button  style={{background:'black',color:'white'}} onClick={()=>ResetValue()}>Close</Button>
            </div>
            <div style={{position:'absolute',bottom:"5px", left:"150px"}}>
                <Button  style={{background:'black',color:'white'}} onClick={()=>{
                    console.log('<style type="text/css">*{box-sizing: border-box}</style>'+document.querySelector('.previewhtml')?.firstChild.outerHTML.replace("e.preventDefault();","").replace(/draggable="true"/g,""))
                }}>Generer la page html</Button>
            </div>
        </Box>
    );
}
const mapStateToProps = state=>{
    console.log('state ' ,state)
    //const {marginBottom,marginTop,marginLeft,marginRight,paddingRight,paddingTop,paddingLeft,paddingBottom,alignText} = state;
    return {
        text:state.value,
        ...state
    }
}
const mapDisptachToProps = dispatch=>{
    return {
        ChangeValue:(value)=>dispatch(ChangeValue(value)),
        ResetValue:()=>dispatch(ResetValue())
    }
}

export default connect(mapStateToProps,mapDisptachToProps)(EditableText);
