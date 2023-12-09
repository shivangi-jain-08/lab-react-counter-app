import React from 'react'
import './App.css';

class Counter extends React.Component{

  
  Inc=()=>{
    this.setState({count:this.state.count+1})
  }
  
  Dec = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  

  Reset=()=>{
    this.setState({count:0})
  }
  
state={
  count:0,
}

  render(){

    let state = 0;
    return(
      <>
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>

        <div className='buttons_div'>
          <button onClick={this.Inc}>+</button>
          <button onClick={this.Dec}>-</button>
          <button onClick={this.Reset}>Reset</button>
        </div>
      </>
    )
  }
}

export default Counter