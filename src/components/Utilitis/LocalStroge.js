const getLocalStroge=()=>{
    const NewStore=localStorage.getItem('card')
    if(NewStore){
        return JSON.parse(NewStore)
    }
    return []
}
const saveCard=card=>{
    const cardStringify=JSON.stringify(card)
    localStorage.setItem('card',cardStringify)
}
const addTol=id=>{
    const card =getLocalStroge()
    card.push(id)
    saveCard(card)
}
const removeFrom=id=>{
    const card=getLocalStroge()
    const remain=card.filter(idx=>idx !== id)
    saveCard(remain)

}
export {addTol , getLocalStroge,removeFrom}