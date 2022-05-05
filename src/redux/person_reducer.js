


const initState=[{id:'001',name:'Tom',age:18}]

export default function personReducer(preState=initState,action){
   const {type,data}=action
switch (type) {
    case 'addperson':
        return [data,...preState]
       

    default:
        return preState
}

}