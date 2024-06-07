

export const up = (number) => {
    return {
        type: "UP",// Thêm các data vào sau
        data : number
    };
}

export const down = () => {
    return {
        type: "DOWN",
    }
}

export const reset = ()=>{
    return{
        type : "RESET",
    }
}