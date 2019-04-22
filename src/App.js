import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("reset button  clicked");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAdd = () =>{
    console.log("this handle add");
    var counters= this.state.counters.slice();
    var newId = this.state.counters[counters.length-1].id+1;
    counters.push({id:newId,value:0});
    this.setState({counters});
  }

  handleDecrement=counter=>{
    console.log("Decrement button clicked");
    const counters = [...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    if(counters[index].value >0) {
      counters[index].value--;
    }
    this.setState({counters});

  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
        <main className="container">
          <Counters
          counters={this.state.counters} 
          onDelete={this.handleDelete}
          onIncrement ={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset} 
          />
          <button className="btn btn-sm btn-primary m-2" onClick={this.handleAdd}>Add Item</button>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
