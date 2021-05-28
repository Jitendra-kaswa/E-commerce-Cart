import React from 'react'

export default class CartItem extends React.Component{
    constructor(){
        super(); {/* it will call the constructor of parent class which is Component in this case and we have to call it, it's mandetory */}
        this.state = {
            price:9999,
            title:'Phone',
            qty:1,
            img:''
        }
    }
    increaseQuantity=()=>{ {/* we have to use arrow function or use function binding otherwise it will give error */}
        this.state.qty+=1;
        console.log(this.state);
    }
    decreaseQuantity=()=>{
        this.state.qty-=1;
        console.log(this.state);
    }
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image } src={this.state.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{color:'#777'}}>Rs. {this.state.price}</div>
                    <div style={{color:'#777'}}>Qty : {this.state.qty}</div>
                    {/* Buttons */}
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" onClick={this.decreaseQuantity} src="https://image.flaticon.com/icons/png/512/992/992683.png"/>
                        <img alt="decrease" className="action-icons" onClick={this.increaseQuantity} src="https://image.flaticon.com/icons/png/512/992/992651.png"/>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/3096/3096673.png"/>
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