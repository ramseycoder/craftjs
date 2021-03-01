export const setElement = (data)=>{

      return {
               type:'SET_ELEMENT',
               payload:{
                   ...data
               }
      }

}

export const ChangeValue = (data)=>{
    return {
        type:'CHANGE_VALUE',
        playload:{
            ...data
        }
    }
}

export  const ResetValue = ()=>{
    return {
        type:'RESET'
    }
}
