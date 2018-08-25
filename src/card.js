import React,{Component} from 'react';
class Cards extends Component{
  render(){
    return(
      <div className={this.props.nameclass} style={this.props.styles}>
        <p className="text-left">{this.props.text}:{this.props.result}</p>
      </div>
    )
  }
}
export default Cards;
