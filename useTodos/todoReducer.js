

export const todoReducer = (initialState=[],action)=>{
    switch (action.type) {
        case "[TODO] add Todo":
            return [...initialState,action.payload]
        case "[TODO] remove Todo":
            return initialState.filter(todo =>todo.id!==action.payload)
        
        case "[TODO] Toggle Todo":
           let x=initialState.map(todo=>{
                if(todo.id===action.payload){
                    return{
                        ...todo,
                        done:!todo.done
                    }
                }
                return todo
           })
           return x.sort((a,b)=>b.done-a.done)
        default:
            return initialState;
    }
}