import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import { connect } from "react-redux";
import { getProductsActionCreator } from "./actionCreators/product";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  setFavourite = title => {
    let oldProducts = [...this.state.products];
    oldProducts[1].title = `${oldProducts[1].title}-UPDATED`;
    this.setState({
      favourites: [title, ...this.state.favourites],
      products: oldProducts
    });
  };

  render() {
    return (
      <div>
        <h4>Favourites:</h4>
        {this.props.favs.map(f => <li key={f}>{f}</li>)}
        {this.props.wip && <p>Loading...</p>}
        {this.props.prods.map(p => (
          <ProductListItem
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            onSetFavourite={this.setFavourite}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    prods: state.products,
    wip: state.isLoading,
    favs: state.favourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(getProductsActionCreator())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
