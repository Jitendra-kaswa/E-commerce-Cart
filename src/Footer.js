import React from 'react'

export const Footer = (props) => {
    return (
        <div style={{fontSize:20, padding:20}}>
            TOTAL: {props.totalPrice}
        </div>
    )
}