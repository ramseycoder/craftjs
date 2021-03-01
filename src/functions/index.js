export const SelectElement = (el)=>{
    const allElemnts = document.querySelectorAll('.selected');
    allElemnts.forEach(xel=>{
        xel.classList.remove('selected');
    })
    el.classList.add('selected');
}
