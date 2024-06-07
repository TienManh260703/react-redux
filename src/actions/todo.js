
export const createTodo = (content) => {
    return {
        type: "CREATE_TODO",
        content : content
    }
}
export const completeTodo = (id) => {
    return {
        type: "COMPLETE_TODO",
        id : id
    }
}

export const undoTodo= (id)=>{
    return{
        type : "UNDO_TODO",
        id : id
    }
}
export const deleteToDo = (id) => {
    return {
        type: "DELETE_TODO",
        id : id
    }
}