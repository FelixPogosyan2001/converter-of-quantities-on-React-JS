import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './card'
//---------------------------------------------------------------------------------
export class App extends Component {
  state={
    value:null,
    text:'Meters',
    views:'none',
    select:'Kilometers',
    placeholder:'Enter the kilometers',
    Kil1:1000,
    Kil2:100000,
    Kil3: 1000000
  }
  //Here life cycles our component
  componentDidMount(){
    setInterval(()=>{
      if(this.state.value==null || this.state.value==0){
        this.setState({
          views:'none'
        })
      }
    },100)
  }
  //----------------------------
  render() {
    return (
      <div className="main">
       <center><div style={{marginTop:'150px'}} className="col-lg-4">
       <h2 style={{color:"white"}}>Converter values </h2>
       <input id="hard" type="text"style={{width:'310px'}} className="form-control" onChange={this.change} placeholder={this.state.placeholder} />
       <select style={{width:'130px'}} onChange={this.replace} className="form-control">
       <option>Kilometers</option>
       <option>Meters</option>
       </select>
      </div>
      <div style={{display:this.state.views}}>
      <Cards result={this.state.value * this.state.Kil1} nameclass="alert alert-warning" styles={{width:'310px',height:'50px',marginTop:'20px'}} text={this.state.text}/>
      <Cards result={this.state.value * this.state.Kil2} nameclass="alert alert-primary col-lg-3" styles={{width:'310px',height:'50px',marginTop:'20px'}} text="Centimeters"/>
      <Cards result={this.state.value * this.state.Kil3} nameclass="alert alert-success col-lg-3"   styles={{width:'310px',height:'50px',marginTop:'20px'}} text="Millimeter"/>
      </div>
      </center>
      </div>
    );
  }
  // Here functions for component
  replace=(event)=>{
    this.setState({
      select:event.target.value
    })
    if(this.state.select==='Kilometers'){
      this.setState({
        placeholder:'Enter the meters',
        text:'Decimeter',
        Kil1:10,
        Kil2:100,
        Kil3:1000
      })
    }
    else if(this.state.select==='Meters'){
      this.setState({
        placeholder:'Enter the kilometers',
        text:'Meters',
        Kil1:1000,
        Kil2:100000,
        Kil3: 1000000
      })
    console.log(this.state.select)
  }
}
  change=(event)=>{
    this.setState({
      value:event.target.value,
      views:'block'
    })
  }
}
