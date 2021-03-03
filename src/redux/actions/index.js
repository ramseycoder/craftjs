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
    const allElemnts = document.querySelectorAll('.selected');
    allElemnts.forEach(xel=>{
        xel.classList.remove('selected');
    })
    return {
        type:'RESET'
    }
}
