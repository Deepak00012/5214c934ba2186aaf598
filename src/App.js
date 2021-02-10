import logo from './logo.svg';
import './App.css';
import React from 'react';
//import react from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {value:'',
  isClicked: false
  };
    
  }
  change = (event)=>{
    this.setState({value: event.target.value});
  }
  submit = (event)=>{
    event.preventDefault();

  }
  click = ()=>{
    this.setState({
    isClicked: true
    })
  }
  componentDidMount(){
    const url = 'https://restcountries.eu/rest/v2/name/{{FORM_INPUT_HERE}}';
    fetch(url)
    .then((response) => response.json())
    .then((data)=>console.log(data));
    
   
  }
 

  render(){
    let clicked="";
    if(this.state.value){
      clicked= <button>Capital Weather</button>;
    }else{
      clicked="";
    }
  return (
    <div className="App">
      <form onSubmit={this.submit}>
        <label>Country
          <input type="text" value={this.state.value} placeholder="Enter country" onChange={this.change} />
          </label>
          <input disabled={this.state.value.length<1} type="submit" value="Submit" onClick={this.click} onClick={this.componentDidMount} />
          {clicked}
        </form>
    </div>
  );
}
}


export default App;
