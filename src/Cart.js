import React from 'react'
import {CartItem} from './CartItem'

export const Cart = (props) =>{
    const {
        products,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
        } = props
    return (
        <div className="cart">
            {products.length===0?"Cart is Empty":products.map((product)=>{
                return (
                    <CartItem
                        product={product}
                        onIncreaseQuantity={onIncreaseQuantity}
                        onDecreaseQuantity={onDecreaseQuantity}
                        onDeleteProduct={onDeleteProduct}
                    />) // this will pass as props
            })}
        </div>
    )
};
