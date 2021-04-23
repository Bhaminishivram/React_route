import React, { Component } from "react";
import NavBar from "./components/navbar"; 
import {Route , Switch , Redirect} from 'react-router-dom';
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
 //when using the switch component , you should order your routes from the 
 //most specific ones to  most generic ones  
 
 //Register our routes, means we need to tell react what component should be 
 // rendered based on given url  
  
 //Route Component is a wrapper around the component that we pass and if the path matches 
 // it will render the component and it will automatically injects these props 
 //(history, match,location ) into components
class App extends Component {
  render() {
    return (
      <div>
        <NavBar /> 
        <div className="content">  
        <Switch> 
          {/* <Route path="/products"  component={products}/>*/}
        {/* <Route path="/products" render={() => <Products sort="newset"/>}/>  // this overwrite default Route props */}
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products/" render={(props) => <Products sort="newset" {...props}/>}/> 
        {/* //this will include the default Route props  */}
        <Route path="/posts/:year?/:month?" component={Posts}/>
        <Route path="/admin" component={Dashboard}/>  
        {/* //redirect from one url to another */}
        <Redirect from="/messages" to="/posts" />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact  component={Home}/> 
        <Redirect to="not-found"/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
