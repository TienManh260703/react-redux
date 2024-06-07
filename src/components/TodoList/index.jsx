import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


function ToDo() {
    return (
        <>
            <div className="todo">
                <TodoInput />
                <TodoList />
            </div>


        </>
    )
}

export default ToDo;