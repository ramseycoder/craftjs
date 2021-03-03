const initialState = {
    setProp:null,
    type:null,
    value:'',
    color:"#000",
    background:"#FFF",
    paddingLeft:0,
    paddingRight:0,
    paddingTop:0,
    marginTop:0,
    marginLeft:0,
    marginBottom:0,
    marginRight:0,
    fontSize:0,
    fontWeight:"normal",
    fontStyle:"normal",
    fontFamily:"Arial",
    underline:"underline",
    alignText:'left',
    href:"",

}


const reducer = (state=initialState,action)=>{
    switch (action.type){
        case 'SET_ELEMENT': {
            console.log('set ',action)
            const {setProp, type} = action.payload
            let data = {};
            let value = ''
            setProp(props => {
                value = props[type]
                data = {...props}
            })
            console.log('data clicked', data);
            return {...state, setProp: setProp, type: type, value: value,fontSize:0,...data}
        }
        case 'CHANGE_VALUE':
            const {type,value} = action.playload
            console.log(('action ',action))
            let data = {};
            state.setProp(props => {
                props[type || state.type] = value
                data = {...props}
            })
            console.log('data change', data);
            return {...state,value: !type? value:state.value,...data}
        case "RESET":
            return {...initialState}
        default:
            return {...state}
    }
}

export default reducer
