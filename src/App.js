import logo from './logo.svg';
import './App.css';
import React from 'react';
//import react from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {value:''};
  }
  change = (event)=>{
    this.setState({value: event.target.value});
  }
  submit = (event)=>{
    event.preventDefault();

  }

  render(){
  return (
    <div className="App">
      <form onSubmit={this.submit}>
        <label>Country
          <input type="text" value={this.state.value} placeholder="Enter country" onChange={this.change} />
          </label>
          <input disabled={this.state.value.length<1} type="submit" value="Submit" />
        </form>
    </div>
  );
}
}

export default App;
