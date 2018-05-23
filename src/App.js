import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Nav";
import ProductDetail from "./ProductDetail";
import Login from "./Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fruits: ["Apple", "Mango"],
      vegetables: [],
      title: "A mega veggie shop",
      subTitle: "A online farm",
      company: "AbC Corp",
      isLoggedIn: false
    };
    setTimeout(() => {
      //vegetables= ["Carrot", "Lettuce"]
      //this.state.fruits = fruits;
      this.setState({ vegetables: ["Carrot", "Lettuce"] });
    }, 5000);
  }
  renderFruits() {
    return this.state.fruits.map(f => <li>{f}</li>);
  }

  renderVegetables() {
    return this.state.vegetables.map(f => <li>{f}</li>);
  }

  render() {
    let { title, subTitle, company } = this.state;
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Nav />
        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route
            path="/products/add"
            render={props => {
              if (this.state.isLoggedIn) {
                return <AddProduct {...props} isAdmin={true} />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route path="/products/detail/:pid" component={ProductDetail} />
          <Route path="/login" component={Login} />
          <Route render={() => <h2>Oops.. thats not found...</h2>} />
          <Footer company={company} />
        </Switch>
      </div>
    );
  }
}

export default App;
