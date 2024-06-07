import { useDispatch } from "react-redux";
import { createTodo } from "../../actions/todo";
import { useRef } from "react";


function TodoInput() {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.elements.content.value !== '') {
           const getData= e.target.elements.content.value;
            dispatch(createTodo(getData))
            inputRef.current.value =''
            inputRef.current.focus();
        }
    }
    return (
        <>
            <div className="todo__item">
                <form action="" onSubmit={handleSubmit}>
                    <input ref={inputRef} name="content"></input>
                    <button type="submit">+</button>
                </form>
            </div>

        </>
    )
}
export default TodoInput