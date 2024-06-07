import { useDispatch, useSelector } from "react-redux";
import { down, up, reset } from "../actions/counter";
import { add } from "../actions/product";
function Counter() {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    const listProduct = useSelector(state =>state.productReducer)
    // console.log(counter);
    return (
        // dispatch call action return {}
        <>
            <h2>Counter ${counter}</h2>
            <button onClick={() => { dispatch(up(5)) }}>Up </button>
            <button onClick={() => { dispatch(down()) }}>Dow</button>
            <button onClick={() => { dispatch(reset()) }}>Reset</button>
            <hr />
            <button onClick={()=>{
                dispatch(add({
                    name : "vans 2",
                    price :23,
                    status : false
                }))
            }} >Add</button>
            

            <div>
                <ul>
                    ${listProduct.map(p =>
                          <div key={p.name}>
                             <li >Name :  ${p.name} </li>
                             <li >Price :  ${p.price} </li>
                             <li >Satus :  ${p.status ? "Còn hàng" : "Hết hàng"} </li>
                             <hr />
                          </div>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Counter;