import React, { Component } from "react";
import "./ProductListItem.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProductListItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onSetFavourite: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: "NOT AVAILABLE"
  };

  onSetFavourite = () => {
    this.props.onSetFavourite(this.props.title);
  };

  constructor(props) {
    super(props);
    //console.log("constructor");
  }

  componentWillMount() {
    //console.log("componentWillMount");
  }

  render() {
    //console.log("render");
    return (
      <div className="container">
        <h2>
          <Link to={`/products/detail/${this.props.id}`}>
            {this.props.title}
          </Link>
        </h2>
        <h4>{this.props.price}</h4>
        <button onClick={this.onSetFavourite}>SET AS FAVOURITE</button>
      </div>
    );
  }

  componentDidMount() {
    //console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log("shouldComponentUpdate");
    return this.props.title !== nextProps.title;
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    //console.log("componentWillUnmount");
  }
}

export default ProductListItem;
