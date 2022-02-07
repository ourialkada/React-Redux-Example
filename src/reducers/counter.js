const counterReducer = (state = 0, action) => {
    var number= action.number;
    if( isNaN(number))
    {
        number = 1;
    }
    console.log(action.number)
    switch(action.type)
    { 
        case "INCREMENT":
            return state + number;
        case "DECREMENT":
            return state - number;
        default :
            return state;
    }
}

export default counterReducer;