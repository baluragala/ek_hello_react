import React, { Component } from "react";
import axios from "axios";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "iphone", price: 0 };
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/products", {
        title: this.state.title,
        price: this.eleRef.value
      })
      .then(res => alert(`Your product saved with ID: ${res.data.id}`));
  };

  render() {
    console.log("Add Product Render");
    return (
      <div>
        <button onClick={() => (this.eleRef.value = 999)}>SET PRICE</button>
        <fieldset>
          <legend>Add Product</legend>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
            <input type="number" ref={eleRef => (this.eleRef = eleRef)} />
            <button type="submit">Add</button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default AddProduct;
