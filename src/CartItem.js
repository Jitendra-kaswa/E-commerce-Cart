import React from 'react'

export default class CartItem extends React.Component{
    // constructor(){
    //     super(); {/* it will call the constructor of parent class which is Component in this case and we have to call it, it's mandetory */}
    //     this.state = {
    //         price:9999,
    //         title:'Phone',
    //         qty:1,
    //         img:''
    //     }
    //     // this.increaseQuantity = this.increaseQuantity.bind(this)
    // }
    // increaseQuantity=()=>{ {/* we have to use arrow function or use function binding otherwise it will give error */}
    //     //this.state.qty+=1; {/* this will just increas the quantity but UI will not change se we have to use setState function */}
    //    // setState is a inherited function

    //    // setState form 1 - if previous state is not required use this
    // //    this.setState({
    // //        qty:this.state.qty+1
    // //     })

    //     // setState form 2 - if previous state required than use this method
    //     // this.setState((prevState)=>{
    //     //     return {qty:prevState.qty+1}
    //     // })
    // }
    // decreaseQuantity=()=>{
    //     this.setState((prevState)=>{
    //         return prevState.qty===1? {}: {qty:prevState.qty-1}
    //     })
    // }
    render() {
        const {title,price,qty,img}=this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image } src={img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777'}}>Qty : {qty}</div>
                    {/* Buttons */}
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" onClick={()=>{this.props.onIncreaseQuantity(this.props.product)}} src="https://image.flaticon.com/icons/png/512/992/992651.png"/>
                        <img alt="decrease" className="action-icons" onClick={()=>{this.props.onDecreaseQuantity(this.props.product)}} src="https://image.flaticon.com/icons/png/512/992/992683.png"/>
                        <img alt="delete" className="action-icons" onClick={()=>{this.props.onDeleteProduct(this.props.product)}} src="https://image.flaticon.com/icons/png/512/3096/3096673.png"/>
                    </div>
                </div>
            </div>
        )
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}