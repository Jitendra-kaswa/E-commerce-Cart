import React from 'react'
import { Cart } from './Cart'
import { Navbar } from './Navbar'
import {Footer} from './Footer'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 9999,
          title: 'Phone',
          qty: 1,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KxpS7YQQtDoGBX4t630vaFbtGCK-WJGZ4w&usqp=CAU'
        },
        {
          price: 999,
          title: 'Watch',
          qty: 2,
          img: 'https://i.gadgets360cdn.com/products/large/realme-watch-670x800-1590388807.jpg'
        },
        {
          price: 99999,
          title: 'Laptop',
          qty: 1,
          img: 'data:image/jpeg;base64,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'
        }
      ]
    }
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty = products[index].qty + 1
    this.setState({
      products: products
    })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty = products[index].qty === 1 ? 1 : products[index].qty - 1
    this.setState({
      products: products
    })
  }
  handleDeleteProduct = (product) => {
    const { products } = this.state
    const index = products.indexOf(product)
    products.splice(index, 1)
    this.setState({
      products: products
    })
  }

  render() {
    const {products} = this.state
    let count=0;
    let total=0;
    for (let i=0;i<products.length;i++){
        count+=products[i].qty
        total+=(products[i].qty*products[i].price)
    }
    return (
      <div className="App">
        <Navbar count={count} />
        <Cart
          products={this.state.products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <Footer totalPrice={total}/>
      </div>
    )
  }

}
