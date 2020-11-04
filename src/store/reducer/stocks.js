const initialState = {
    stocks: [
        
    ]
}

export default function reducer(state = initialState, action){
    switch( action.type ){
        case 'ADD_STOCK':
            return {...state, stocks: [...state.stocks, action.payload]}

        case 'REMOVE_STOCK':
            return {...state, stocks: [...state.stocks].filter((value,index) => {return index != action.payload.index})}

        default:
            return state;
    }
}