const initialState = [{
    name: "manh 1",
    price: 3,
    status: true
},
{
    name: "manh",
    price: 3456,
    status: false
},

];

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD":
            return [...state, action.data]
        case "DELETE":
            return state.filter(product => product.id !== action.data.id);
        case "UPDATE":
            return state.map(product =>
                product.id === action.data.id ? { ...product, ...action.data.updates } : product
            );
        default:
            return state;
    }
}

export default productReducer;