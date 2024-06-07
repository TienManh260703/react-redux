import { useDispatch, useSelector } from "react-redux";
import { completeTodo, deleteToDo, undoTodo } from "../../actions/todo";

function TodoList() {
    const todoList = useSelector(state => state.todoReducer)
    const dispatch = useDispatch()
    console.log(todoList);
    return (
        <>
            {todoList && (
                <ul className="todo__list">
                    {todoList.map(item => (
                        <li key={item.id} className="todo__item">
                            <span className={"todo__content " + (item.complete && "todo__content--completed ")}>{item.content}</span>
                            {
                                item.complete ?
                                    <button onClick ={() => dispatch( undoTodo(item.id))}>U</button>
                                    :
                                    <button onClick={() => dispatch(completeTodo(item.id))}>V</button>
                            }
                            <button onClick={()=> dispatch(deleteToDo(item.id))} >X</button>

                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default TodoList;