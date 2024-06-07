// impost các reducers

import { combineReducers } from "redux";
import counterReducer from "./counter";
import productReducer from "./productReducer";
import todoReducer from "./todo";

const allReducers = combineReducers({
    counterReducer,
    productReducer,
    todoReducer

    // Thêm Nhiều reduucers ở đây (qua main,jsx sử dựng createStore để tạo store chứa allReducers) (Slide : 34)
});

export default allReducers;