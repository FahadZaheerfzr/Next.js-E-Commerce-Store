import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
const initialCart = {
    cart:[
        // {
        //     id: 0,
        //     name: 'Throwback Hip Bag',
        //     href: '#',
        //     color: 'Salmon',
        //     price: 90.00,
        //     quantity: 1,
        //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        //     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
        // },
        // {
        //     id: 200,
        //     name: 'Medium Stuff Satchel',
        //     href: '#',
        //     color: 'Blue',
        //     price: 32.00,
        //     quantity: 1,
        //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        //     imageAlt:
        //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        // },
    ],
    totalCost: 0.00,
}

export const CartContext = createContext(initialCart)

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialCart);

    // Actions for changing state

    function addToCart(item) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })
    }

    function removeFromCart(item) {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: item
        })
    }

    return(
        <CartContext.Provider value={{
            cart: state.cart, total: state.totalCost, addToCart, removeFromCart
        }}>
            { children }
        </CartContext.Provider>
    )
}