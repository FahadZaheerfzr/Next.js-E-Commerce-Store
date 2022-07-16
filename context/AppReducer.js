import React from "react";

export default (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                cart: [action.payload, ...state.cart],
                totalCost: action.payload.price + state.totalCost,
            }

        case 'REMOVE_ITEM':
            return {
                cart: state.cart.filter(item => item !== action.payload),
                totalCost: state.totalCost - action.payload.price,
            }

        default:
            return state;
    }
}