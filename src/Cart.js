import React from 'react'
import CartItem from './CartItem'
export default class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[
                {
                    price:9999,
                    title:'Phone',
                    qty:1,
                    img:''
                },
                {
                    price:999,
                    title:'Watch',
                    qty:2,
                    img:''
                },
                {
                    price:99999,
                    title:'Laptop',
                    qty:1,
                    img:''
                }
            ]
        }
    }
    handleIncreaseQuantity=(product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty = products[index].qty+1
        this.setState({
            products:products
        })
    }
    handleDecreaseQuantity=(product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty = products[index].qty===1?1:products[index].qty-1
        this.setState({
            products:products
        })
    }
    handleDeleteProduct = (product)=>{
        const {products} = this.state
        const index = products.indexOf(product)
        products.splice(index, 1)
        this.setState({
            products:products
        })
    }
    render() {
        return (
            <div className="cart">
                {this.state.products.length===0?"Cart is Empty":this.state.products.map((item)=>{
                    return (
                        <CartItem
                            product={item}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDeleteProduct={this.handleDeleteProduct}
                        />) // this will pass as props
                })}
            </div>
        )
    }
}
