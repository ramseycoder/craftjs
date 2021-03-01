const initialState = {
      setProp:null,
      type:null,
      value:''
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
            return {...state, setProp: setProp, type: type, value: value,...data,fontSize:0}
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
            return {...state,value: !type? value:state.value}
        case "RESET":
            return {...initialState}
        default:
            return {...state}
    }
}

export default reducer
