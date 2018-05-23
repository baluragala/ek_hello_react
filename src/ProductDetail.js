import React, { Component } from "react";
import axios from "axios";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      additionalInfo: "",
      rating: "",
      reviews: ""
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/products/${this.props.match.params.pid}`)
      .then(response => {
        let { title, price, additionalInfo, rating, reviews } = response.data;
        this.setState({ title, price, additionalInfo, rating, reviews });
      });
  }

  render() {
    return (
      <div>
        <h3>ProductDetail for {this.props.match.params.pid}</h3>
        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={() => this.props.history.push("/products")}>
          Back
        </button>
      </div>
    );
  }
}

export default ProductDetail;
